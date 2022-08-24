export const splitChunk = <T>(t: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < t.length; i += size) {
    chunks.push(t.slice(i, i + size));
  }
  return chunks;
};
