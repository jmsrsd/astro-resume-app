export default function serialize(json: any) {
  return JSON.parse(JSON.stringify(json));
}
