var $currentPage="sculptures";
var $selectedSubMenu="Silicon Wax";

var $subMenu={};
$subMenu["sculptures"]=["Wax","Bronze",];
$subMenu["paintings"]= ["pencil art","more"];
$subMenu["events"]=["Promotional Campaigns"];
$subMenu["more"]=["lamp patterns"];

var $template = {};
$template["Wax"] = "image";
$template["Bronze"] = "image";
$template["pencil art"] = "image";
$template["more"] = "image";
$template["Promotional Campaigns"] = "image";
$template["lamp patterns"] = "image";

var $imagePaths = {};
$imagePaths["Wax"] = "sw";
$imagePaths["Bronze"] = "br";
$imagePaths["pencil art"] = "pa";
$imagePaths["more"] = "mo";
$imagePaths["Promotional Campaigns"]="pc";
$imagePaths["lamp patterns"] = "lp";

var $pageContent = {};

$pageContent["Wax"] = [];
$pageContent["Wax"].push(
		{
			image : 9,
			popover : "60 Feet Jesus Statue",
			title : "India's 60 Feet Jesus Statue",
			size : "60 Feet",
			desc : "India's first 60 Feet Jesus statue designed, modelled and implemented. Currently being erected in Valappadi near Puthra Gounda Palayam - Salem District."
		});
$pageContent["Wax"].push(
		{
			image : 1,
			popover : "Real-life replication of Shridhi Sai Baba in silicon wax",
			title : "Wax Statue of Shridhi Sai Baba",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to withstand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : false,
			desc : "REALISTIC LIFE SIZE WAX STATUES."
		});
$pageContent["Wax"].push(
		{
			image : 3,
			popover : "Close profile of Shridhi Sai Baba in wax",
			title : "Wax Statue of Shridhi Sai Baba",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : 4,
			popover : "Real-life replication of Mother in wax",
			title : "Wax Statue of Mother",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : 5,
			popover : "Real-life replication of Calvin Klein",
			title : "Wax Statue of Calvin Klein",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : 6,
			popover : "Close Profile of Mother in wax",
			title : "Wax Statue of Mother",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : 7,
			popover : "Long shot of Calvin Klien in wax",
			title : "Wax Statue of Calvin klein",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Wax"].push(
		{
			image : 8,
			popover : "Close-up of Shridhi Sai Baba in silicon wax",
			title : "Wax Statue of Shridhi Sai Baba",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});

$pageContent["Bronze"] = [];
$pageContent["Bronze"].push(
		{
			image : 1,
			popover : "Statue of Ramanujam",
			title : "Statue of Ramanujam",
			size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["Bronze"].push(
				{
					image : 2,
					popover : "Statue of Thandhai Periyar",
					title : "Statue of Thandhai Periyar",
					size : "Portrait",
					//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["Bronze"].push(
				{
					image : false,
					desc : "LIFE SIZE STATUES MADE OF BRONZE"
		});
$pageContent["Bronze"].push(
						{
							image : 4,
							popover : "Statue of Dr.Amedkar",
							title : "Statue of Dr.Amedkar",
							size : "Life size",
							//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["Bronze"].push(
								{
									image : 5,
									popover : "Statue of Sir C.V.Raman",
									title : "Statue of Sir C.V.Raman",
									size : "Life size",
									//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});


$pageContent["pencil art"] = [];
$pageContent["pencil art"].push(
		{
			image : 1,
			popover : "Close portrait of woman",
			title : "Close portrait of woman",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["pencil art"].push(
		{
			image : 2,
			popover : "Lady with fruits",
			title : "Lady with fruits",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["pencil art"].push(
		{
			image : 3,
			popover : "Portrait of Woman",
			title : "Portrait of Woman",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["pencil art"].push(
		{
			image : 4,
			popover : "Portrait of Woman",
			title : "Portrait of Woman",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["pencil art"].push(
		{
			image : 5,
			popover : "Portrait of Woman",
			title : "Portrait of Woman",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["pencil art"].push(
		{
			image : false,
			desc : "RECREATION ON RAJA RAVIVARMA'S CREATIONS IN PENCIL"
		});
$pageContent["pencil art"].push(
		{
			image : 7,
			popover : "Portrait of Woman",
			title : "Portrait of Woman",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of pencil art to with stand heat and pressure even in hot climate."
		});
$pageContent["more"] = [];
$pageContent["more"].push(
		{
			image : 1,
			popover : " ",
			title : " ",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});

$pageContent["more"].push(
		{
			image : 2,
			popover : " ",
			title : " ",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["more"].push(
		{
			image : false,
			desc : "MORE PAINTINGS."
		});
$pageContent["more"].push(
		{
			image : 4,
			popover : " ",
			title : " ",
			//size : "Life siz
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["more"].push(
		{
			image : 5,
			popover : " ",
			title : " ",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["more"].push(
		{
			image : 6,
			popover : " ",
			title : " ",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["more"].push(
		{
			image : 7,
			popover : " ",
			title : " ",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});

$pageContent["lamp patterns"] = [];
$pageContent["lamp patterns"].push(
		{
			image : 1,
			popover : "Decorative Brass Lamp",
			title : "Decorative Brass Lamp",
			//size : "Life size",
			//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["lamp patterns"].push(
						{
							image : false,
							desc : "LAMP DESIGNS. PATTERNS CREATED IN BRASS."
		});

$pageContent["lamp patterns"].push(
				{
					image : 3,
					popover : "Decorative Brass Lamp",
					title : "Decorative Brass Lamp",
					//size : "Life size",
					//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["lamp patterns"].push(
				{
					image : 4,
					popover : "Decorative Brass Lamp",
					title : "Decorative Brass Lamp",
					//size : "Life size",
					//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["lamp patterns"].push(
						{
							image : 5,
							popover : "Decorative Brass Lamp",
							title : "Decorative Brass Lamp",
							//size : "Life size",
							//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});
$pageContent["lamp patterns"].push(
						{
							image : 6,
							popover : "Decorative Brass Lamp",
							title : "Decorative Brass Lamp",
							//size : "Life size",
							//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});

$pageContent["lamp patterns"].push(
							{
								image : 7,
								popover : "Decorative Brass Lamp",
								title : "Decorative Brass Lamp",
								//size : "Life size",
								//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of more to with stand heat and pressure even in hot climate."
		});

$pageContent["Promotional Campaigns"] = [];
$pageContent["Promotional Campaigns"].push(
						{
							image : false,
							desc : "CONCEPTS. IDEAS. CAMPAIGNS."
		});
$pageContent["Promotional Campaigns"].push(
				{
					image : 2,
					popover : "Mobile Stall Design for TamilNadu Tourism",
					title : "Mobile Stall Design for TamilNadu Tourism",
					//size : "Life size",
					//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});
$pageContent["Promotional Campaigns"].push(
						{
							image : 3,
							popover : "Mobile Stall Design for TamilNadu Tourism",
							title : "Mobile Stall Design for TamilNadu Tourism",
							//size : "Life size",
							//desc : "Enclosed in Glass frame with beading. With realistic look and feel. Made of silicon wax to with stand heat and pressure even in hot climate."
		});