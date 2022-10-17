export default function getIndex(data: any[], id: string) {
  return data.findIndex((el: any) => el.id === id);
}
