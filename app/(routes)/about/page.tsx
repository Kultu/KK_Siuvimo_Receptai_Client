import * as React from "react"
import Container from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";


  const AboutPage: React.FC = () => {
    return (
      <Container>
        <div className="space-y-10 pb-10">
            <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
                <h3 className="pt-4 font-bold text-3xl">Apie mus</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                    <p className="font-sans">
                        Sveiki atvykę į mūsų drabužių parduotuvę! Mes esame aistringi dėl
                        mados ir siekiame suteikti jums aukščiausios kokybės drabužius.
                        Mūsų tikslas - patenkinti kiekvieno kliento poreikius ir suteikti
                        jums ne tik stiliaus, bet ir patogumo.
                    </p>
                    <p className="font-sans pt-2">
                        Mūsų kolekcija apima įvairių stilių ir dydžių drabužius - nuo
                        kasdienių derinukų iki ypatingų vakarinių suknelių. Mes stengiamės
                        atspindėti naujausias mados tendencijas ir siūlome aukštos kokybės
                        prekes už prieinamą kainą.
                    </p>
                    </CardContent>
                </Card>

                <h3 className="font-bold text-3xl">Misija</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                        <p className="font-sans">
                        Mes siekiame suteikti jums ne tik stilingų drabužių, bet ir nepakartojamo pirkimo
                        patirties. Kiekvienas mūsų gaminys yra rūpestingai atrinktas ir pagamintas, kad
                        atitiktų aukščiausius standartus.
                        </p>
                    </CardContent>
                </Card>

                <h3 className="font-bold text-3xl">Vizija</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                        <p className="font-sans">
                        Mes siekiame suteikti jums ne tik stilingų drabužių, bet ir nepakartojamo pirkimo
                        patirties. Kiekvienas mūsų gaminys yra rūpestingai atrinktas ir pagamintas, kad
                        atitiktų aukščiausius standartus.
                        </p>
                    </CardContent>
                </Card>

                <h3 className="font-bold text-3xl">Pasirinkimas</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                    <p className="font-sans">
                        Mes atidžiai parenkame mūsų parduotuvėje pateikiamus drabužius,
                        siekdami užtikrinti, kad kiekvienas produktas atitiktų aukščiausius
                        standartus. Mes bendradarbiaujame su talentingais dizaineriais ir
                        patikimais tiekėjais, kad galėtume pasiūlyti jums tik geriausius
                        produktus.
                    </p>
                    </CardContent>
                </Card>

                <h3 className="font-bold text-3xl">Komanda</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                    <p className="font-sans">
                        Mūsų komanda sudaryta iš entuziastingų ir profesionalių asmenų,
                        kurie įsipareigoję užtikrinti jūsų patirtį su mumis yra nepakartojama.
                        Mes stengiamės suteikti jums puikų aptarnavimą ir padėti rasti
                        tobulesnį drabužį, atitinkantį jūsų lūkesčius.
                    </p>
                    </CardContent>
                </Card>

                <h3 className="font-bold text-3xl">Susisiekite Su Mumis</h3>
                <Card className="bg-slate-100">
                    <CardContent className="pt-6">
                    <p className="font-sans">
                        Jeigu turite klausimų, pasiūlymų ar norite gauti papildomos informacijos,
                        nedvejokite susisiekti su mumis. Mes esame pasiruošę jums padėti!
                    </p>
                    <p className="font-sans pt-2">
                        Mus pasieksite el. paštu: testas@parduotuve.lt
                    </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </Container>
    );
  };
  
  export default AboutPage;