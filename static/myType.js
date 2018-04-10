var worddict = "come|came|about|talk|would|at|add|an|story|same|run|men|small|did|off|name|eye|point|get|its|important|story|him|have|earth|got|world|stop|been|quickly|cut|large|here|like|below|how|two|place|other|leave|away|after|long|eat|again|try|will|live|seem|far|may|white|it's|the|America|went|all|no|boy|people|there|are|more|something|if|page|even|want|again|follow|sound|began|large|write|saw|kind|many|where|call|picture|think|second|such|below|found|like|is|no|line|Indian|another|hand|take|until|ask|each|how|close|she|kind|should|was|over|own|end|picture|different|like|animal|don't|put|also|world|name|head|set|start|we|river|list|little|went|always|big|an|boy|many|little|and|around|said|one|right|she|for|sea|time|those|than|here|their|can|being|list|my|big|word|from|make|and|try|know|letter|our|eye|now|oil|by|along|from|every|Indian|book|together|go|take|being|often|next|water|good|you|me|want|still|family|boy|thing|big|idea|came|can|no|soon|look|first|group|high|few|thing|other|us|away|it|were|earth|father|with|every|get|carry|might|all|idea|move|now|she|first|would|day|quick|without|make|time|under|in|its|saw|Indian|people|saw|change|need|much|form|be|close|quickly|almost|great|father|say|once|begin|line|place|different|far|study|hand|home|between|well|page|quite|both|tell|which|about|where|hear|day|list|need|we|left|put|great|these|read|where|come|earth|off|could|part|find|keep|spell|country|both|both|young|us|first|out|watch|later|grow|man|might|are|said|as|river|water|me|to|long|begin|have|carry|life|miss|house|form|three|while|were|feet|home|answer|until|learn|two|which|walk|next|city|how|thought|point|so|has|young|group|got|stop|off|between|something|more|well|found|tree|hard|for|get|sometimes|sea|sentence|year|some|song|his|were|mean|thought|give|animal|some|until|away|";
//var worddict ="cat|chattr|chgrp|chmod|chown|cksum|cmp|diff|diffstat|file|find|git|gitview|indent|cut|ln|less|locate|lsattr|mattrib|mc|mdel|mdir|mktemp|more|mmove|mread|mren|mtools|mtoolstest|mv|od|paste|patch|rcp|rm|slocate|split|tee|tmpwatch|touch|umask|which|cp|whereis|mcopy|mshowfat|rhmask|scp|awk|col|colrm|comm|csplit|ed|egrep|ex|fgrep|fmt|fold|grep|ispell|jed|joe|join|look|mtype|pico|rgrep|sed|sort|spell|tr|expr|uniq|wc|let|lprm|lpr|lpq|lpd|bye|ftp|uuto|uupick|uucp|uucico|tftp|ncftp|ftpshut|ftpwho|ftpcount|cd|df|dirs|du|edquota|eject|mcd|mdeltree|mdu|mkdir|mlabel|mmd|mrd|mzip|pwd|quota|mount|mmount|rmdir|rmt|stat|tree|umount|ls|quotacheck|quotaoff|lndir|repquota|quotaon|badblocks|cfdisk|dd|e2fsck|ext2ed|fsck|fsck.minix|fsconf|fdformat|hdparm|mformat|mkbootdisk|mkdosfs|mke2fs|mkfs.ext2|mkfs.msdos|mkinitrd|mkisofs|mkswap|mpartition|swapon|symlinks|sync|mbadblocks|mkfs.minix|fsck.ext2|fdisk|losetup|mkfs|sfdisk|swapoff|apachectl|arpwatch|dip|getty|mingetty|uux|telnet|uulog|uustat|ppp-off|netconfig|nc|httpd|ifconfig|minicom|mesg|dnsconf|wall|netstat|ping|pppstats|samba|setserial|talk|traceroute|tty|newaliases|uuname|netconf|write|statserial|efax|pppsetup|tcpdump|ytalk|cu|smbd|testparm|smbclient|shapecfg|adduser|chfn|useradd|date|exit|finger|fwhios|sleep|suspend|groupdel|groupmod|halt|kill|last|lastb|login|logname|logout|ps|nice|procinfo|top|pstree|reboot|rlogin|rsh|sliplogin|screen|shutdown|rwho|sudo|gitps|swatch|tload|logrotate|uname|chsh|userconf|userdel|usermod|vlock|who|whoami|whois|newgrp|renice|su|skill|w|id|free|reset|clear|alias|dircolors|aumix|bind|chroot|clock|crontab|declare|depmod|dmesg|enable|eval|export|pwunconv|grpconv|rpm|insmod|kbdconfig|lilo|liloconfig|lsmod|minfo|set|modprobe|ntsysv|mouseconfig|passwd|pwconv|rdate|resize|rmmod|grpunconv|modinfo|time|setup|sndconfig|setenv|setconsole|timeconfig|ulimit|unset|chkconfig|apmd|hwclock|mkkickstart|fbset|unalias|SVGATextMode|ar|bunzip2|bzip2|bzip2recover|gunzip|unarj|compress|cpio|dump|uuencode|gzexe|gzip|lha|restore|tar|uudecode|unzip|zip|zipinfo|setleds|loadkeys|rdev|dumpkeys";
var words;// = worddict.split("|");
var wordboard = $("#wordboard");
wordboard.css("position","relative");
var inputbox =  $("input#inputfield");
var time;
var word_pointer = 0;
var setVal;
var $word;
var correct = 0;
var correct_strokes = 0;
var wrong_strokes = 0;
var wrong = 0;
var inputword = "";
var inputwords = [];
var loading = 0;
var keys = [];
var displayString;
var rowCount = 0;
var lastTop = 0;
var timerStart = false;
var lineHeight = 0;
var p;
var wrongWord;
var lastKey;

$(document).ready(function(){
	//alert("hello");
	restart();
	keylistener();


	$(document).keydown(function(event){
		if(event.which == 116 && loading == 0) {
			loading = 1;
			restart();
			return false;
		}
		keys[even.which] = true;
	});

	$(document).keyup(function(event){
		delete keys[event.which];
	});

	$("#reload-btn").on('click', function(){
		restart();
		return false;
	});

});


restart = function(argument) {


	time = 600;
	timerStart = false;

	correct = 0;
	correct_strokes = 0;
	wrong_strokes = 0;
	wrong = 0;
	inputword = "";
	loading = 0;
	rowCount = 0;
	lastTop =0;
	lineHeight = 0;
	word_pointer = 0;


	window.clearInterval(setVal);
    setVal = "";
    words = worddict.split("|");
    wordspan();

    $("#timer").text("60:0");
    $("#wordboard").css('top', "1px");
    inputbox.val("");
	
}

keylistener = function(){
	inputbox.keyup(function(event){
		if(loading == 0 && timerStart == false ) {
			if(event.which!=82 && event.which!=17){
				
				timerStart = true;
				startTime = new Date().getTime();
				setVal = window.setInterval(timer,100);
				return false;
			}
		}

		if (inputbox.val() == "" && event.which==8) return false;
		
		//$word.addClass('highlight');
		$word = $('#wordboard span[wordIndex="'+word_pointer+'"]');

		inputwords = inputbox.val().split(" ");

		if(event.which == 32 && inputbox.val() == ' ') {
			//alert("32");
			inputbox.val('');
		}
		else if(event.which == 32){

			inputword = inputwords[inputwords.length-2];


			$word.removeClass('highlight-wrong');

			
			if(inputword == words[word_pointer]){
				$word.removeClass('highlight').removeClass('wrong').addClass('correct');
				correct ++;
				correct_strokes += inputword.length + 1;
			} else {
				$word.removeClass('highlight').removeClass('correct').addClass('wrong');
				wrong ++;
				wrong_strokes += inputword.length + 1;
			}


			word_pointer ++;

			$word = $('#wordboard span[wordIndex="'+word_pointer+'"]');
			
			$word.addClass('highlight');

			p = $word.position();
			lastKey = 32;
			if (p.top > lastTop +10){
				rowCount ++;
				lastTop = p.top;
				var newTop = (lineHeight * -1 ) * rowCount;
				$("#wordboard").css('top', newTop+"px");
				inputbox.val("");
				lastKey = 0;

			}
			
		}else if(event.which == 8) {



			if (lastKey == 32) 	{
				$word.removeClass('highlight');
				word_pointer --;
				lastKey = 8;

			}
			$word = $('#wordboard span[wordIndex="'+word_pointer+'"]');
			$word.removeClass('wrong').removeClass('correct');
			if ( inputwords[inputwords.length-1] == words[word_pointer].substr(0,inputwords[inputwords.length-1].length))
				$word.removeClass('highlight-wrong').addClass('highlight');
			else
				$word.removeClass('highlight').addClass('highlight-wrong');

			if (inputwords[inputwords.length-1] == "") lastKey=32;			
		} else
		{
			lastKey = event.which;
			if ( inputwords[inputwords.length-1] == words[word_pointer].substr(0,inputwords[inputwords.length-1].length))
				$word.removeClass('highlight-wrong').addClass('highlight');
			else
				$word.removeClass('highlight').addClass('highlight-wrong');
		}
	});
}

timer = function(){
	time --;
	var second;
	var millisec;

	if (time <= 0){
		
		
		
		var count = 0;
		end = new Date().getTime();
		var correctLst = wordboard.children('span.correct');
		var correctNumber = correctLst.length;
		$('aside').find('#wpm').text("WPM:"+correctNumber);
		var errorNumber = wordboard.children('span.wrong').length;
		$('aside').find('#error').text("Error:"+errorNumber);
		
		for ( var i=0; i<correctNumber;i++){
			count += correctLst[i].innerText.length + 1;
		}

		$('aside').find('#kpm').text("KPM:"+count);

		window.clearInterval(setVal);
		
				//displayResult();
	} else {
		second = Math.floor(time / 10);
		millisec = time % 10;

		if (second < 10) second = '0' + second;
		$("#timer").text(second+":"+millisec);

	}
}

wordspan = function () {
	displayString='';
	
	for(var i=0; i < words.length; i++){
		displayString += '<span wordIndex="'+i+'" class="">'+words[i]+'</span> ';
	}
	
	wordboard.html(displayString);
	inputbox.css("font-size", $("#wordboard span:first").css("font-size") );
	lineHeight = parseInt($('#wordboard span[wordIndex="'+word_pointer+'"]').css('line-height'));
	$("#wordboard span:first").addClass('highlight');
	wordboard.css('height',5 * $("#wordboard span:first").css('height'));
	inputbox.focus();
	
}


$(".dropdown ul li").click(function() {
	
    //alert(this.id); // id of clicked li by directly accessing DOMElement property
    $.post('ajax_words', {catagory:$(this).parent().attr("id"),alphabet:this.id},function(data){
    	
    	setTimeout(function() {
	  		loading = 1;
	  		worddict = data;
	  		restart();
	  		return false;
		},250);
	});
});

$("#linux").click(function(){
	    $.post('ajax_words', {catagory:this.id,alphabet:"A"},function(data){
    	setTimeout(function() {
	  		loading = 1;
	  		worddict = data;
	  		restart();
	  		return false;
		},250);
	});
});

$("#toefl").click(function(){
	    $.post('ajax_words', {catagory:this.id,alphabet:"A"},function(data){
    	setTimeout(function() {
	  		loading = 1;
	  		worddict = data;
	  		restart();
	  		return false;
		},250);
	});
});