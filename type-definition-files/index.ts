interface Window {
  fetch(url: string|Request, init?: RequestInit): Promise<Response>
}
