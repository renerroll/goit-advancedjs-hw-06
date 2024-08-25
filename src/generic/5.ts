interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const kvp: KeyValuePair<string, number> = { key: "age", value: 30 };

export {};