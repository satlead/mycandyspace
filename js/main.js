var aboutHTML='<div class="about_content"><h3>Hi! I am Mohan Jayaraman</h3>';

	aboutHTML += '<p>Artist, Sculptor, Visualizer, Illustrator and Tamil Script writer. I have been working in this vast';
	aboutHTML += 'domain of ART for more than 20 years. I did my Diploma in Fine Arts in Sculpture from Govt. College';
	aboutHTML += 'of Arts and Crafts, Chennai, India. I have been working with reputed advertising agencies like';
	aboutHTML += 'Fountainhead, Bates, Disha and so on.</p>' ;

	aboutHTML += '<p>Currently working as freelancer creating story boards for television ads, illustrations, package';
	aboutHTML += 'designs and sculptures for both industry and personal requirements.</p>';


	aboutHTML += '<h4>What can I do for you?</h4>';
	aboutHTML += "<ul>";
	aboutHTML += '<li>Paintings</li>';
	aboutHTML += '<li>Sculptures</li>';
	aboutHTML += '<li>Wall Murrels</li>';
	aboutHTML += '<li>Brass Lamps & Statues</li>';
	aboutHTML += '<li>Clay Modelling</li>';
	aboutHTML += '<li>Fibre glass and wax models</li>';
	aboutHTML += '<li>Package Designs</li>';
	aboutHTML += '<li>Story Boards</li>';
	aboutHTML += '<li>Illustrations</li>';
	aboutHTML += '<li>Tamil Copy writing</li>';
	aboutHTML += '<li>Event Displays & Stall Designs</li>';
	aboutHTML += "</ul>";
	
	aboutHTML += "<p>Feel free to contact me for all kinds of art works and art-related queries.</p>";

	aboutHTML += '<h4>Write to me:</h4>';

	aboutHTML += '<p>dzinemaze@gmail.com</p>';


	aboutHTML += '<p>mohan64arts@gmail.com</p></div>';

function removeWhiteSpace(str)
{
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

var popup = 0;
$("document").ready(function(){
	updateSubMenu($currentPage);
	$(".menu").click(function(){
		highlightClickedItem($(this));
		updateSubMenu($(this).find(".menuText").first().text());
		hideMenuForMobile();
	});
	
	$("#mob-header").click(function(){
		$(".menuItem").toggle();
	});
	
	$(window).on("resize",function(){
		if($(this).width()>834){
			$(".menuItem").show();
		}
		else{
			$(".menuItem").hide();
		}
	});
	
	
	
	$(".close-popup").click(function(){
		popup.close();
	});
	
	hideMenuForMobile();
	
	showPopup(getSinglePageContent("0"));
});

function bindMenus()
{
$(".showcaseItem").bind("mouseenter",showcaseItemIn);
$(".showcaseItem").bind("mouseleave",showcaseItemOut);
$(".overlayText").bind("click",handlePopup);
}

function unbindMenus()
{
$(".showcaseItem").unbind("mouseenter",showcaseItemIn);
$(".showcaseItem").unbind("mouseleave",showcaseItemOut);
$(".overlayText").unbind("click",handlePopup);
}

function showcaseItemIn()
{
	$(this).find(".overlayText").first().fadeIn(500);
}

function showcaseItemOut()
{
	$(this).find(".overlayText").first().fadeOut(500);
}

function handlePopup(){
	var data = getSinglePageContent($(this).attr("data-index"));
	showPopup(data);
	
}

function showPopup(data){
	$("#full-image").attr("src","images/"+$imagePaths[$selectedSubMenu]+"/popover/"+data.image+".png");
	$("#full-image").attr("alt",data.popover);
	$("#popup-title").html(data.title);
	//$("#popup-size").html("Size : " +data.size);
	$("#popup-desc").hide();
	if(data.desc){
		$("#popup-desc").html(data.desc);
		$("#popup-desc").show();
	}
	var posX = "auto"
	var posY = 60;
	if($(window).width()<600){
		posX = 0;
		posY = 0;
	}
	popup = $("#popup-container").bPopup({transition: "fadeIn",position : [posX,posY]});
}

function highlightClickedItem(obj)
{
	$(".menu").removeClass("menuItemSelected");
	$(".menu").addClass("menuItem");
	obj.removeClass("menuItem");
	obj.addClass("menuItemSelected");
}

function submenuClickHandler()
{
	$(".submenu").removeClass("submenuItemSelected");
	$(".submenu").addClass("submenuItem");
	$(this).removeClass("submenuItem");
	$(this).addClass("submenuItemSelected");

	$selectedSubMenu= removeWhiteSpace($(this).text());
	updateContent();
}

function updateSubMenu(currentSelected)
{
	currentSelected = removeWhiteSpace(currentSelected);
	$currentPage = currentSelected;
	$("#submenu").html("");
	
	if($subMenu[currentSelected])
		{
		$(".submenu").unbind("click",submenuClickHandler);	
		var subMenuList = $subMenu[currentSelected];
		var i=0;
		for(i;i<subMenuList.length;i++)
			{
			var subMenuText = '<span class="submenu ';
				if(i==0)
					{
					$selectedSubMenu= subMenuList[i];
					subMenuText+="submenuItemSelected";
					}
				else{
					subMenuText+="submenuItem";
				}
				subMenuText +='" >'+ subMenuList[i] +" </span>";
				$("#submenu").append(subMenuText);
			}
		$(".submenu").bind("click",submenuClickHandler);
		}
	updateContent();
}

function updateContent()
{
	if($currentPage==="about"){
	loadAboutContent();	
	}
	else{
	switch($template[$selectedSubMenu])
	{
	case "image":
		loadImageContent();
		break;
	}
	}
}

function loadAboutContent(){
	$("#content").html(aboutHTML);
}

function loadImageContent()
{
	unbindMenus();
	$("#content").html('<ul id="showcase"></ul');
	var currentPageContent = $pageContent[$selectedSubMenu];
	var imagesPath = $imagePaths[$selectedSubMenu]+"/";
	var i=0;
	var tableContent = "";
	for(i;i<currentPageContent.length;i++)
		{
			var singlePageContent = currentPageContent[i];
			tableContent+='<li class="showcaseItem';
			if(singlePageContent.image){
				tableContent+='"><div class="imageSc"><img src="images/'+imagesPath+singlePageContent.image+'.png" ';
				tableContent+='title="'+singlePageContent.title+'" ';
				tableContent+='data-index="'+singlePageContent.image+'"></div>';
				tableContent+='<div class="overlayText" data-index="'+i+'"><div class="overlaySc">'+singlePageContent.title;
				tableContent+='</div><div class="knowMoreCont"><span class="knowMore">Know more</span>';
				tableContent+="</div>";
			}
			else
				{
				 tableContent+='"><div class="noImageSC"> <div class="showcaseText">'+singlePageContent.desc + "</div><div>";
				}
			tableContent+="</li>";
		}
	$("#showcase").html(tableContent);
	bindMenus();
}

function hideMenuForMobile(){
	if($(window).width()<835){
		$(".menuItem").toggle();
	}
	else{
		$(".menuItem").show();
	}
}

function getSinglePageContent(index){
	return $pageContent[$selectedSubMenu][parseInt(index)];
}
