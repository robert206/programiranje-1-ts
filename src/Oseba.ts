export class Oseba {

  constructor(
    public ime: string,
    public visina: number,
    public teza: number,
    public index: number
  ) {}

  //39.naloga
  public static indeksTelesneTeze (osebe : Oseba[]) : Oseba[] {
        osebe.forEach(oseba => {
            oseba.index = oseba.teza / (oseba.visina * oseba.visina);
        });
        return osebe;
    }
}