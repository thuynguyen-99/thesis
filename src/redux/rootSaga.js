import { all } from 'redux-saga/effects';
import { 
    signUpSaga, 
    logInSaga, 
    getCurrentUserProfileSaga, 
    logOutSaga, 
    getuserProfileSaga, 
    getActiveMembersSaga, 
    changePasswordSaga,
    editInfoSaga,
    getCommentsByUsernameSaga,
    getDealsByUserSaga,
    updateDealInfollowingDealsIdSaga,
    getFollowingDealsByUserSaga,
    getPendingDealsByUserSaga,
    getMyNotificationsSaga,
    markNotiAsReadSaga,
    markAllNotiAsReadSaga,
    updateFollowUserSaga,
    getFollowInfoByUsernameSaga,
    resetPasswordSaga,
    sendFeedbackSaga,
} from './users/saga';
import {
    createDealSaga,
    setLikedStatusSaga,
    getLikeByDealIdSaga,
    crawlDataFromShopeeSaga,
    crawlDataFromTikiSaga,
    addNewCommentSaga,
    getCommentByDealIdSaga,
    deleteCommentSaga,
    editCommentSaga,
    getDealSaga,
    getAllDealsSaga,
    setDisLikedStatusSaga,
    getDisLikeByDealIdSaga,
    setLikeCommentSaga,
    setDisLikeCommentSaga,
    searchDealSaga,
    reportExpireSaga,
    reportDealSaga,
    reportCommentSaga,
    editPendingDealSaga,
    deletePendingDealSaga,
    changeCategorySaga,
    getFeaturedDealsSaga,
    getHotDealsSaga,
    getFlashDealsSaga,
    getPopularDealsSaga,
    getRecentDealsSaga,
    getBestDealsSaga,
    getReportedCommentByDealIdSaga,
    getChildrenCommentByCommentIdSaga,
    getCategoriesSaga,
    updateFeaturedCommentStatusSaga,
    getFeaturedCommentByDealIdSaga,
    getDealsForUserSaga,
    addCategorySaga,
} from './deals/saga';
import { 
    editDealSaga, 
    getDealsCountSaga, 
    markDealAsViewedSaga, 
    reviewDealSaga, 
    getIsReportedExpiredDealsSaga, 
    updateExpiredSaga, 
    getReportedCommentsSaga,
    getDealsSaga, 
    getIsReportedExpiredDealsCountSaga,
    getUsersSaga,
    blockUserSaga,
    createUserAccountSaga,
    getUsersCountSaga,
    ignoredDealSaga,
    updateReportedCommentSaga,
    ignoreReportedCommentSaga,
    getReportedCommentsCountSaga,
    changeUsersRoleSaga,
    changeDealsFiltersSaga,
    changeMenuTabSaga,
    updateEditorsNoteSaga,
    deleteEditorsNoteSaga,
    changeCommentsFiltersSaga,
    markDealAsFeaturedSaga,
    getReportedDealsCountSaga,
    getReportedDealsSaga,
    getUsersReportedDealSaga,
    deleteReportsOnDealSaga,
    viewDetailUsersReportingSaga,
    getFeedbackSaga,
    markFeedbackAsSolvedSaga,
} from './admin/saga';

export function* rootSaga() {
    yield all([
        getCurrentUserProfileSaga(),
        getuserProfileSaga(),
        getCommentsByUsernameSaga(),
        getDealsByUserSaga(),
        getFollowingDealsByUserSaga(),
        getPendingDealsByUserSaga(),

        getActiveMembersSaga(),
        getMyNotificationsSaga(),
        markNotiAsReadSaga(),
        markAllNotiAsReadSaga(),
        
        signUpSaga(),
        logInSaga(),
        logOutSaga(),
        changePasswordSaga(),
        resetPasswordSaga(),
        editInfoSaga(),

        getCategoriesSaga(),
        addCategorySaga(),
        
        createDealSaga(),
        deletePendingDealSaga(),
        editPendingDealSaga(),
        
        setLikedStatusSaga(),
        getLikeByDealIdSaga(),
        
        crawlDataFromShopeeSaga(),
        crawlDataFromTikiSaga(),
        
        addNewCommentSaga(),
        getCommentByDealIdSaga(),
        getReportedCommentByDealIdSaga(),
        deleteCommentSaga(),
        editCommentSaga(),
        viewDetailUsersReportingSaga(),

        getAllDealsSaga(),
        getDealSaga(),
        changeCategorySaga(),
        getFeaturedDealsSaga(),
        getHotDealsSaga(),
        getFlashDealsSaga(),
        getPopularDealsSaga(),
        getRecentDealsSaga(),
        getBestDealsSaga(),
        getDealsForUserSaga(),

        setDisLikedStatusSaga(),
        getDisLikeByDealIdSaga(),

        setLikeCommentSaga(),
        setDisLikeCommentSaga(),

        searchDealSaga(),

        reviewDealSaga(),
        editDealSaga(),
        updateEditorsNoteSaga(),
        deleteEditorsNoteSaga(),
        markDealAsFeaturedSaga(),
        markDealAsViewedSaga(),

        getDealsCountSaga(),
        getDealsSaga(),
        getReportedDealsCountSaga(),
        getReportedDealsSaga(),
        getUsersReportedDealSaga(),
        deleteReportsOnDealSaga(),

        changeMenuTabSaga(),
        changeDealsFiltersSaga(),

        reportExpireSaga(),
        getIsReportedExpiredDealsSaga(),
        getIsReportedExpiredDealsCountSaga(),
        updateExpiredSaga(),
        ignoredDealSaga(),

        reportDealSaga(),

        reportCommentSaga(),
        getReportedCommentsSaga(),
        updateReportedCommentSaga(),
        ignoreReportedCommentSaga(),
        getReportedCommentsCountSaga(),
        changeCommentsFiltersSaga(),
        getChildrenCommentByCommentIdSaga(),

        updateFeaturedCommentStatusSaga(),
        getFeaturedCommentByDealIdSaga(),
        
        //users
        updateDealInfollowingDealsIdSaga(),
        getUsersSaga(),
        getUsersCountSaga(),
        blockUserSaga(),
        createUserAccountSaga(),
        changeUsersRoleSaga(),

        updateFollowUserSaga(),
        getFollowInfoByUsernameSaga(),
        
        sendFeedbackSaga(),
        getFeedbackSaga(),
        markFeedbackAsSolvedSaga(),
    ]);
}
  
export default rootSaga;