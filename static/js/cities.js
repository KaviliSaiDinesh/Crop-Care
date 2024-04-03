var province_arr = new Array("Andhra Pradesh", "Tamil Nadu", "Telangana");

var district = new Array();
district[0] = " ";
district[1] = "Anantapur|Chittoor|East Godavari|Guntur|Kadapa|Kurnool|Nellore|Prakasam|Srikakulam|Visakhapatnam|Vizianagaram|West Godavari";
district[2] = "Ariyalur|Chengalpattu|Chennai|Coimbatore|Cuddalore|Dharmapuri|Dindigul|Erode|Kallakurichi|Kanchipuram|Kanyakumari|Karur|Krishnagiri|Madurai|Mayiladuthurai|Nagapattinam|Namakkal|Nilgiris|Perambalur|Pudukkottai|Ramanathapuram|Ranipet|Salem|Sivaganga|Tenkasi|Thanjavur|Theni|Thoothukudi|Tiruchirapalli|Tirunelveli|Tirupathur|Tiruppur|Tiruvallur|Tiruvannamalai|Vellore|Viluppuram|Virudhunagar";
district[3] = "Adilabad|Bhadradri Kothagudem|Hyderabad|Jagtial|Jangaon|Jayashankar Bhupalpally|Jogulamba Gadwal|Kamareddy|Karimnagar|Khammam|Komaram Bheem|Mahabubabad|Mahabubnagar|Mancherial|Medak|Medchal-Malkajgiri|Nagarkurnool|Nalgonda|Nirmal|Nizamabad|Peddapalli|Rajanna Sircilla|Ranga Reddy|Sangareddy|Siddipet|Suryapet|Vikarabad|Wanaparthy|Warangal(Rural)|Warangal(Urban)|Yadadri Bhuvanagiri";



function print_province(province_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(province_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select Province','');
	option_str.selectedIndex = 0;
	for (var i=0; i<province_arr.length; i++) {
		option_str.options[option_str.length] = new Option(province_arr[i],province_arr[i]);
	}
}

function print_district(district_id, district_index){
	var option_str = document.getElementById(district_id);
	option_str.length=0;	
	option_str.options[0] = new Option('Select District','');
	option_str.selectedIndex = 0;
	var district_arr = district[district_index].split("|");
	for (var i=0; i<district_arr.length; i++) {
		option_str.options[option_str.length] = new Option(district_arr[i],district_arr[i]);
	}
}
