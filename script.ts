var d=[0,0,0,0,0,0,0];
var m=[0,0];

abstract class Sorte
{
abstract lanciaQualcosa() :number;
}

class Dado extends Sorte
{
    lanciaQualcosa():number
    {
        var num = Math.floor(Math.random() * (6 -1 +1))+1;
        return num;
    }
}
class Moneta extends Sorte
{
    lanciaQualcosa():number
    {
        var num = Math.floor(Math.random() * (1 -0 +1))+0; //0 croce //1 testa
        return num;
    }
}



document.getElementById("silvia").addEventListener("click", function()
    {
        var e = (document.getElementById("cristina")) as HTMLSelectElement;     
        var sel = e.selectedIndex;     
        var opt = e.options[sel];     
        var selezionato = opt.value;

        if(selezionato=="dado")
        {
            var ProvaDado : Dado = new Dado();
            var tirato = ProvaDado.lanciaQualcosa()
            d[tirato]+=1;
            document.getElementById("n"+[tirato]).innerHTML = d[tirato].toString();
        }
        if(selezionato == "moneta")
        {
            var ProvaMoneta : Moneta = new Moneta();
            var tirata = ProvaMoneta.lanciaQualcosa()
            m[tirata]+=1;
            document.getElementById("moneta"+[tirata]).innerHTML = m[tirata].toString();
        }
    }
);