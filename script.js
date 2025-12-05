const reels = [
  {
    ismuted: true,
    username: "tech_satwik",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    caption: "Makes  a funny movement every day by day! 🔥",
    video: "./Reels/video1.mp4",
    userProfile: "https://i.pinimg.com/736x/4d/42/36/4d4236f4abffa072f5e844759ed217a8.jpg",
    shareCount: 12,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "Nehal_itz",
    likeCount: 5000,
    isLiked: true,
    commentCount: 120,
    caption: "How boys and girls treats others",
    video: "./Reels/video2.mp4",
    userProfile: "https://i.pinimg.com/1200x/ca/58/3f/ca583fafc574395096845f5700e3ee31.jpg",
    shareCount: 34,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "frontend_girl",
    likeCount: 980,
    isLiked: false,
    commentCount: 30,
    caption: "CSS gradients are love 💖",
    video: "./Reels/video3.mp4",
    userProfile: "https://i.pinimg.com/736x/7d/be/d9/7dbed90655c6d7de0f4d01eb01b9cbe1.jpg",
    shareCount: 8,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "js_master",
    likeCount: 2600,
    isLiked: true,
    commentCount: 70,
    caption: "Mastering Keydown events ⚡",
    video: "./Reels/video4.mp4",
    userProfile: "https://i.pinimg.com/736x/13/48/de/1348de8b3c2d7822a72f76df93f32b45.jpg",
    shareCount: 22,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "uiux_vibes",
    likeCount: 1500,
    isLiked: false,
    commentCount: 54,
    caption: "Minimal UI > everything 😌",
    video: "./Reels/video5.mp4",
    userProfile: "https://i.pinimg.com/736x/7c/21/ff/7c21ff01ed456dc6ff2dfb7546ace86c.jpg",
    shareCount: 13,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "Sheriyans_Coder",
    likeCount: 7200,
    isLiked: true,
    commentCount: 210,
    caption: "Sheriyans day 56 — DOM childNodes! 🚀",
    video: "./Reels/video6.mp4",
    userProfile: "https://i.pinimg.com/736x/53/24/5b/53245b708ab5ab7e2f5db477fefa7fe0.jpg",
    shareCount: 60,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "daily_dev",
    likeCount: 340,
    isLiked: false,
    commentCount: 15,
    caption: "Morning coding session ☕💻",
    video: "./Reels/video7.mp4",
    userProfile: "https://i.pinimg.com/1200x/2f/4e/cd/2f4ecda518463716238bf45fca1bcea3.jpg",
    shareCount: 5,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "music_coder",
    likeCount: 1800,
    isLiked: true,
    commentCount: 95,
    caption: "Press A-G to play notes 🎧",
    video: "./Reels/video8.mp4",
    userProfile: "https://i.pinimg.com/736x/5a/bd/da/5abdda9877ac196225cdabb0a7ed57ed.jpg",
    shareCount: 19,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "travel_with_js",
    likeCount: 2300,
    isLiked: false,
    commentCount: 88,
    caption: "Coding from mountains ⛰️",
    video: "./Reels/video9.mp4",
    userProfile: "https://i.pinimg.com/736x/28/70/d0/2870d00d5dfc229d52520f45236cc530.jpg",
    shareCount: 29,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "debug_king",
    likeCount: 4100,
    isLiked: true,
    commentCount: 140,
    caption: "Fixed 1 bug, created 3 more 😂",
    video: "./Reels/video10.mp4",
    userProfile: "https://i.pinimg.com/1200x/8f/52/d6/8f52d6a51fcede924527769c127cdfab.jpg",
    shareCount: 40,
    isFollowed: true
  }
];

let allreels = document.querySelector(".all-reels")

function addData() {
  let clutter = ""
reels.forEach(function(det, idx) {
    clutter += `<div class="reel">
                    <video class="video" autoplay loop ${det.ismuted?'muted':''} src="${det.video}"></video>
                    <div id="${idx}" class="mute">
                      ${det.ismuted? '<i class="ri-volume-mute-fill"></i>': '<i class="ri-volume-up-fill"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${det.userProfile}" alt="">
                            <h4>${det.username}</h4>
                            <button id="${idx}" class="follow">${det.isFollowed?"UnFollow" : "Follow"}</button>
                        </div>
                        <h3>${det.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon">${det.isLiked?'<i id="love" class="ri-heart-3-fill"></i>': '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${det.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${det.commentCount}</</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${det.shareCount}</</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
    allreels.innerHTML = clutter
})
}

addData()

function pointerEvents() {
  allreels.addEventListener("click", function(dets) {
  if(dets.target.className === "like"){
    if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true
    }else{
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }
    addData()
  }
  if(dets.target.className === "follow"){
    reels[dets.target.id].isFollowed = !reels[dets.target.id].isFollowed
    addData()
  }
  
  if(dets.target.className === "mute"){
    reels[dets.target.id].ismuted = !reels[dets.target.id].ismuted
    addData()
  }
  if(dets.target.classList.contains("video")) {
    let vid = dets.target
    if(vid.paused){
      vid.play()
    }else{
      vid.pause()
    }
  } 
})
}


pointerEvents()