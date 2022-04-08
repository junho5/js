function loginUser(id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('사용자 정보 얻음');
            resolve({ userId: id });
        }, 3000);
    });
}

function getUserVdeos(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('비디오 제목은 ...');
        }, 2000);
    });
}

loginUser('jypark', 123456)
    .then(user => {
        console.log(`${user.userId}님 환영합니다.`);
        return getUserVdeos(user.id);
    })
    .then(videos => {
        console.log(videos);
        return videoDetails(videos[0]);
    })
    .then(details => console.log(details))

const loginGetVideos = async (id, password) => {
    let user = await loginUser(id, password);
    console.log(`${user.userId}님 환영합니다.`);
    let videos = await getUserVdeos(user.id);
    console.log(videos)
    let details = await videoDetails(videos[0]);
    console.log(details)
};

loginGetVideos('jypart', 123456)

