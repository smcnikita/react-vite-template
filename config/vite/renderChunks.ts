interface IChunks {
  [key: string]: string[];
}

export function renderChunks(deps: Record<string, string>) {
  const chunks: IChunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) {
      return;
    }

    chunks[key] = [key];
  });

  return chunks;
}
