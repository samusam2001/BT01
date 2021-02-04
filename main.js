
var btnTinh = document.getElementById("btnTinh").addEventListener("click",function(e){
	e.preventDefault();
	var inputChieuDai 	= document.getElementById("inputChieuDai").value;
	var inputChieuRong 	= document.getElementById("inputChieuRong").value;
	var txtThongBao		= document.getElementById("txtThongBao");
	var result;
	var chuVi,dienTich;
	
	

	if(inputChieuDai == "" && inputChieuRong == ""){
		result = "chưa nhập chiều dài + chiều rộng";
		txtThongBao.setAttribute("class","alert alert-danger");
		txtThongBao.innerHTML = result;
	}else{
		inputChieuDai 	= parseInt(inputChieuDai);
		inputChieuRong	= parseInt(inputChieuRong);
		if(!Number.isInteger(inputChieuDai) && !Number.isInteger(inputChieuRong)){
			result = "chiều dài và chiều rộng phải là số";
			txtThongBao.setAttribute("class","alert alert-danger");
			txtThongBao.innerHTML = result;
		}else{
			chuVi 		= (inputChieuDai + inputChieuRong)*2;
			dienTich	= inputChieuDai * inputChieuRong;
			result		= "Chu Vi: "+chuVi;
			result	   += "<br/> Diện Tích: "+dienTich;
			txtThongBao.setAttribute("class","alert alert-success");
			txtThongBao.innerHTML = result;
		}
	}
	

	
	

});


var btnTinhToan = document.getElementById("btnTinhToan").addEventListener("click",function(e){
	e.preventDefault();
	var inputNumber 	= document.getElementById("inputNumber").value;
	var txtThongBao2	= document.getElementById("txtThongBao2");
	var result2, chuc, donVi;
	
	if(inputNumber == ""){
		result2 = "chưa nhập số";
		txtThongBao2.setAttribute("class","alert alert-danger");
		txtThongBao2.innerHTML = result2;
	}else{
		if(inputNumber.toString().length >= 3){
			result2 = "chỉ nhập 2 số";
			txtThongBao2.setAttribute("class","alert alert-danger");
			txtThongBao2.innerHTML = result2;
		}else{
			inputNumber 	= parseInt(inputNumber);
			if(!Number.isInteger(inputNumber)){
				result2 = "ko phải là số vui lòng nhập đúng";
				txtThongBao2.setAttribute("class","alert alert-danger");
				txtThongBao2.innerHTML = result2;
			}else{
				chuc 	= Math.floor(inputNumber/10);
				donVi 	= Math.floor(inputNumber%10);
				result2 = chuc + donVi;
				txtThongBao2.setAttribute("class","alert alert-success");
				txtThongBao2.innerHTML = result2;
			}
		}

	}
	
	

});