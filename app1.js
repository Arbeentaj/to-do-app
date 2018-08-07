var arrName =[];
	var arrCat = [];
	var arrDate = [];
	
	function addTask()
	{
		//debugger;
		var del=Math.floor(Math.random()*100), edi=Math.floor(Math.random()*1000),tik=Math.floor(Math.random()*10000);
		var thingName =document.getElementById("name1").value;
		var categoryName =document.getElementById("cate").value;
		var idofname = Math.floor(Math.random()*100);
		var idofcat = Math.floor(Math.random()*1000);
		
		
		var taskButton=document.getElementById("addtask");
		 //taskButton.addEventListener('click' , function(event){
		 var taskName = thingName.value;
		 cellText=[];
		//var body1 = document.getElementById("body");
		var tabbody = document.getElementById("tblid");
		var div1 =document.getElementById("innerdiv");
		var div2 = document.getElementById("contbox");
		var row = document.createElement("tr");
		row.setAttribute('id','rowid');
			
				//debugger;
				cell = document.createElement("td");
				cell.setAttribute('id',idofname);
				cellText= document.createTextNode(thingName);
				
				cat = document.createElement("td");
				cat.setAttribute('id',idofcat);
				 catText= document.createTextNode(categoryName);
				
				var date = document.createElement("td");
				curDate = new Date();
				datText = document.createTextNode(curDate);
				
				var comp = document.createElement("td");
				chkbox =document.createElement("input");
				comp1Text =document.createElement("i");
				comp2Text =document.createElement("i");
				
				
				chkbox.setAttribute('type','checkbox');
				chkbox.setAttribute('onclick','strikefunc(document.getElementById("rowid"))');
				chkbox.setAttribute('id',tik);
				comp1Text.setAttribute('class','fa fa-pencil-square-o');
				comp1Text.setAttribute('id',edi);
				comp1Text.setAttribute('onclick','editfunc(comp1Text.getAttribute("id"),cell.getAttribute("id"),cat.getAttribute("id"))');
				comp2Text.setAttribute('class','fa fa-trash-o');
				comp2Text.setAttribute('id',del);
				comp2Text.setAttribute('onclick','deletefunc(comp2Text.getAttribute("id"))');
				
				
				
				 
				cell.appendChild(cellText);
				cat.appendChild(catText);
				date.appendChild(datText);
				comp.appendChild(chkbox);
				comp.appendChild(comp1Text);
				comp.appendChild(comp2Text);
				
				
			
				
				row.appendChild(cell);
				row.appendChild(cat);
				row.appendChild(date);
				row.appendChild(comp);
				tabbody.appendChild(row);
				
				
				
				
				
				
				
				
				
		
		 arrName.push(thingName);
		 arrCat.push(categoryName);
		 arrDate.push(curDate);
		 
		 localStorage.setItem('name',arrName);
		 localStorage.setItem('category',arrCat);
		 localStorage.setItem('date',arrDate);
		 
		 //localStorage.getItem(key)
		 //body.appendChild(div1);
		 
		//		 });
			
		 
	}	

		function deletefunc(del)
		{
			
			document.getElementById(del).parentNode.parentNode.remove();
			
			
		}

		function editfunc(edi,idofname,idofcat){
		
		document.getElementById("updateing").style.visibility = "visible";
		
				var divupdate =document.getElementById("updateing");
				textupdate = document.createElement("input");
				catupdate = document.createElement("input");
				updatebutton =document.createElement("input");
				textupdate.setAttribute('id','changename');
				catupdate.setAttribute('id','changecatg');
				updatebutton.setAttribute('type','button');
				updatebutton.setAttribute('value','update');
				updatebutton.setAttribute('id','buttonupdateid');
				updatebutton.setAttribute('onclick','updatefunc(textupdate.getAttribute("id"),catupdate.getAttribute("id"),cell.getAttribute("id"),cat.getAttribute("id"))');
				
				
				
				divupdate.appendChild(textupdate);
				divupdate.appendChild(catupdate);
				divupdate.appendChild(updatebutton);
				
				
				
				
		
		 var nameChange = document.getElementById(edi).parentNode.parentNode;
		
		  var nameid =  document.getElementById(idofname).textContent;
		 document.getElementById('changename').value = nameid;
		  var catid = document.getElementById(idofcat).textContent;
		document.getElementById('changecatg').value = catid;
		 
		}
		
		function updatefunc(changename,changecatg,idofname,idofcat){
		
			arrName.splice(arrName.indexOf(document.getElementById(idofname).textContent),1);
			arrCat.splice(arrCat.indexOf(document.getElementById(idofcat).textContent),1) 
			var backtotext = document.getElementById('changename').value;
			document.getElementById(idofname).textContent=backtotext;
			var backtocat =document.getElementById('changecatg').value;
			document.getElementById(idofcat).textContent=backtocat;
			arrName.push(document.getElementById('changename').value);
			arrCat.push(document.getElementById('changecatg').value);
			localStorage.setItem('name',arrName);
			localStorage.setItem('category',arrCat);
			
			
			
		}
		
		function strikefunc(rowid)
		{
		rowid.style.textDecoration = "line-through";
			
		}
		
		
		 