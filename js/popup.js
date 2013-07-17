(function()
{
	chrome.extension.sendRequest({"notifs":true}, function(response) {
		var notifs = response['notifs'];
		var n_count = response['n_count'];
		var m_count = response['m_count'];

		var container = document.getElementById('container');

		for(var i=0;i<notifs.length; ++i)
		{
			var element = document.createElement('div');
			element.innerHTML = notifs[i];
			element.className = "notification";
			container.appendChild(element);			
		
			element.onclick = function()
			{
				window.open("http://quora.com/notifications");
			}
		}

		if(n_count == 0)
		{
			var element = document.createElement('img');
			element.src = "images/empty.png";
			element.style.cursor = "pointer";
			element.style.marginLeft = "20px";
	
			element.title = "But there's always something @ Quora";			
			element.onclick = function()
			{
				window.open("http://quora.com");
			}
			container.appendChild(element);
		}

		var num_notifs = document.getElementById("num_notifs")
		var num_messages = document.getElementById("num_messages");
		
		num_notifs.innerHTML = "<a href='http://www.quora.com/notifications' target='_blank'>Notifications</a><br /><span>" + n_count + "</span>";
		num_messages.innerHTML = "<a href='http://www.quora.com/inbox' target='_blank'>Messages<strong></a><br /><span>" + m_count + "</span>";	
	});

	
}());

