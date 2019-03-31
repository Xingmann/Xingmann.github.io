
loadPosts(archive)
		.then(function(userPosts){
			userPosts.posts.forEach(function(post){
				loadPostContent(archive, post)
				.then(function(postAndArchive){
					console.log("post", postAndArchive.post)
					var pushCount = 0; // placeholder 0

					var buttonId = "button-" + postAndArchive.post.timestamp,
						pushCountId = "push-" + postAndArchive.post.timestamp;

					postContainer.insertAdjacentHTML("beforeend", `
						<div class="post" data-percentage="${pushCount}" id="post-${pushCountId}">
							<hr />
							<h2>${postAndArchive.post.title}</h2>
							<h4>${postAndArchive.post.timestamp}</h4>
							<p>${postAndArchive.post.content}</p>
							<div class="button" id="${buttonId}">Push</div> 
							<p class="info"><i> <span class="post_count number" id="${pushCountId}" >${pushCount}</span> people have pushed this</i></p>
						</div>

					`)


					// 
					archive.readdir('/pushedposts/').then(function(pushes){
						
						var pushedCounterPost = pushes.length,
							currentPushedPost = 0;

						console.log("pushedCounterPost", pushedCounterPost)

						pushes.forEach(function(push){
							archive.readFile('/pushedposts/' + push)
							.then(function(file){
								var content = JSON.parse(file)
								 if(content.pushedTimestamp === postAndArchive.post.timestamp){
								 	pushCount++
								 	console.log(postAndArchive.post.title, pushCount)
								 	
								 	var pushCountSpan = document.getElementById(pushCountId);
								 	pushCountSpan.innerHTML = pushCount; // update hmtl to reflect post number

								 	$("#post-" + pushCountId).attr("data-percentage", pushCount);

								 	// also update data-category

								 	console.log("updated!")

								 }
								 currentPushedPost++;

								 console.log(pushedCounterPost, currentPushedPost)

	 							if(pushedCounterPost == currentPushedPost){
									// now we run the sorting function
									console.log("updated pushcount finished!!")

									var ourPosts = $("#posts");
	

									console.log(parseInt($(".post")[0].dataset.percentage))


									ourPosts.find('.post').sort(function(a, b) {
										return +b.dataset.percentage - +a.dataset.percentage;
									})
									.appendTo(ourPosts);


								}
							})
						})


					})

					

					var postData = [buttonId, postAndArchive.post.timestamp, pushCountId]
					
					return postData
				})
				.then(function(postData){

					var buttonId = postData[0]
					var postTime = postData[1]
					var pushCountId = postData[2]					

					// click button to react
					var button = $("#" + buttonId) 
					
					console.log(button.size())

					var hasBeenClicked = false;

					button.on('click', function(){
						$(this).css({"background-color":"#3a3a3a","color":"#f4f4f4"});
						$(this).html("Pushed");
						// visually adding one to the push count:
						var currentCount = $("#" + pushCountId).html();
						currentCount = parseInt(currentCount)
						$("#" + pushCountId).html(currentCount + 1);

						if(!hasBeenClicked){
							console.log($(this).siblings("h4").html())
							var pushedPost = "post-" + $(this).siblings("h4").html();
							
							// here we call the submit push function
							 writePushed(archive, pushedPost)
						}

						hasBeenClicked = true;

						function writePushed(archive, pushSubmission){
							var archive = archive;

							var	pushTime = new Date().getTime();

						  	var postContent = {
						  		"pushedTimestamp" : postTime,
						  	}
							
						  	async function pushedFile(archive, postContent){
						  		await archive.writeFile('/pushedposts/' + pushTime + '.json', JSON.stringify(postContent));
						  	}

						  	// filename: when we've clicked "push"
						  	// file contents: the original post's timestamp
						
						  	pushedFile(archive, postContent)
						  	.then(function(event){
						  		console.log("post is pushed!")
						  	})
						  	.catch(function(error){
						  		console.log("error\n", error)
						  	})
						
						}



					});


				}) // .then close
			}) // userposts foreach closing
		}) //end of loadposts
	