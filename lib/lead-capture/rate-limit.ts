/**
 * Best-effort, per-instance fixed-window limiter. On serverless hosting each instance keeps its own counters, so
 * this slows casual abuse and accidental double-posting but is not a guarantee; put Vercel's firewall/WAF rate
 * limiting in front of /api/walkthrough for a hard limit.
 */
const hits = new Map<string, { count: number; resetAt: number }>();
const MAX_KEYS = 5000;

export function rateLimited(key: string, max: number, windowMs: number, now = Date.now()): boolean {
  if (hits.size > MAX_KEYS) {
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
    if (hits.size > MAX_KEYS) hits.clear();
  }
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > max;
}

export function resetRateLimits() {
  hits.clear();
}
