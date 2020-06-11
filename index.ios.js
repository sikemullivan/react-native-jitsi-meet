/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const callToken = JitsiMeetModule.callToken;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
}
JitsiMeetModule.callToken = (url, userInfo, token) => {
  userInfo = userInfo || {};
  callToken(url, userInfo, token);
}
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
}
export default JitsiMeetModule;


