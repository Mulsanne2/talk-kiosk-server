module.exports = function(app){
    const ordered = require('./orderedController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');


    // 1. json 내용 가져오기
    app.get('/app/ordered',ordered.getOrderedJson);

    // 2. json으로 테이블 생성
    app.post('/app/ordered', ordered.postOrdered);

/*
    // 0. 테스트 API
    // app.get('/app/test', user.getTest)

    // 1. 유저 생성 (회원가입) API
    app.post('/app/users', user.postUsers);

    // 2. 유저 조회 API (+ 검색)
    app.get('/app/users',user.getUsers); 

    // 3. 특정 유저 조회 API
    app.get('/app/users/:userId', user.getUserById);


    // TODO: After 로그인 인증 방법 (JWT)
    // 로그인 하기 API (JWT 생성)
    app.post('/app/login', user.login);

    // 회원 정보 수정 API (JWT 검증 및 Validation - 메소드 체이닝 방식으로 jwtMiddleware 사용)
    app.patch('/app/users/:userId', jwtMiddleware, user.patchUsers)

    // 1.3 유저 피드 조회 api
    app.get('/users/:userIdx', user.getUserFeed);

    // 1.4 유저 삭제 api
    app.get('/users/:userIdx/status', user.Delete);
    */
};