function cosineSimilarity(vecA, vecB) {
  if (!Array.isArray(vecA) || !Array.isArray(vecB)) {
    throw new Error("Both inputs must be arrays");
  }
  if (vecA.length !== vecB.length) {
    throw new Error("Vectors must be of same length");
  }

  let dot = 0,
    magA = 0,
    magB = 0;

  for (let i = 0; i < vecA.length; i++) {
    const a = vecA[i];
    const b = vecB[i];
    dot += a * b;
    magA += a * a;
    magB += b * b;
  }

  if (magA === 0 || magB === 0) return 0; // avoid division by zero

  let similarity = dot / (Math.sqrt(magA) * Math.sqrt(magB));

  // clamp result in range [-1, 1] to fix floating-point precision issues
  if (similarity > 1) similarity = 1;
  if (similarity < -1) similarity = -1;

  return similarity;
}

module.exports = cosineSimilarity;
