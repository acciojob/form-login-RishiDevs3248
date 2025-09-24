function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1')
	let f = form.fname.value;
	let l = form.lname.value;

	alert(`${f} ${l}`);

}
