export default function CamposNecessarios(item: { campo: string; valor: any }[], camposNecessarios: string[]): string[] {
  const camposPresentes = item.map((i) => i.campo);
  return camposNecessarios.filter((campo) => !camposPresentes.includes(campo));
}