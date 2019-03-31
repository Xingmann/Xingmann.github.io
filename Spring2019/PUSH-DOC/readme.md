
# PUSH Function


## What It Does

The PUSH function allows users to push the posts they'd like to distribute to the top of the site so more people can see them. 


### How It Works

1. Button, custom attributes, and an additional code snippet added(see below).


-	postContainer.insertAdjacentHTML("beforeend", `
						<div class="post" data-percentage="${pushCount}" id="post-${pushCountId}">
							.....
							<div class="button" id="${buttonId}">Push</div> 
							<p class="info"><i> <span class="post_count number" id="${pushCountId}" >${pushCount}</span> people have pushed this</i></p>
						</div>`)
					

2. When the button is clicked, a new json file is added into the 'pushedposts' folder.
3. In order to differentiate: 
   - the name of the new json file contains a timestamp generated when we clicked the button.
   - the content of the new json file contains the timestamp of the pushed post.
4. The number of pushed times is updated by how many times the button has been clicked for the sake of fluency.
5. Based on the {pushCount} in {data-percentage}, the posts are sorted descendingly.


### Notes

Due to the specific sequencing it requires, the whole script is written inside of index.html file. To check PUSH function individually, please go to 'build/PUSH.js'.




 


