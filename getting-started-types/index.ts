function func(value: string | null): number {
  return value != null && value.length || 0
}
