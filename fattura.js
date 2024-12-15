function fattura(){
            let quant=q.value;
            let quant2=q2.value;
            let quant3=q3.value;
			
            let prezzo=p.value;
			let prezzo2=p2.value;
            let prezzo3=p3.value;

            let impriga1=quant*prezzo;
            let impriga2=quant2*prezzo2;
            let impriga3=quant3*prezzo3;

            importo.value=impriga1;
            importo2.value=impriga2;
            importo3.value=impriga3;

            let imponibiletot=impriga1+impriga2+impriga3;
            imponibile.value=imponibiletot;
            iva.value=imponibiletot*22/100;
            tot.value=imponibiletot+iva.value;
}