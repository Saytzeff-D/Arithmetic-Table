function clickMe() {
	var u = "";
	u+="<Table>"
	for(i=1; i<=column.value; i++) {
		u+="<td>"
		u+="Table " +i
		u+="<Table border='2px' solid black>";

		for(a=1; a<=row.value; a++) {
			u+="<tr><td>"+(i+david.value+a)+ "="
			+eval(i+david.value+a)+ "<td><tr>"
		}
u+="</Table></td>"
		} 
		u=="</tr></Table>"
       ans.innerHTML= u;
	}