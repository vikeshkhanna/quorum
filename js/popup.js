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
			var element = document.createElement('p');

			element.textContent = "No new notifications.";
			container.appendChild(element);
		}

		var num_notifs = document.getElementById("num_notifs")
		var num_messages = document.getElementById("num_messages");
		num_notifs.innerHTML = "<a href='http://www.quora.com/notifications' title='View Notifications' target='_blank'>Notifications<br /><span>" + n_count + "</span></a>";
		num_messages.innerHTML = "<a href='http://www.quora.com/inbox' title='View Messages' target='_blank'>Messages<strong><br /><span>" + m_count + "</span></a>";	
	});
}());


