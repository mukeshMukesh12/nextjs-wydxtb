import RTCClient from "./rtc-client";
import React, { Component } from "react";
import $, { extend } from "jquery";
import {
  getDevices,
  serializeFormData,
  validator,
  screenShareResolutions,
  Toast,
} from "./common";
// import './assets/style.css'
import * as M from "materialize-css";

export default class page extends Component {
  componentDidMount() {
    let screenAudio = true;

    let data = {
      appID: "29ee422fd0594cdba1998cebfdd8ed94",
      channel: "ch_name_token",
      codec: "h264",
      mode: "live",
      screenAudio: "on",
      screenShareResolution: "default",
      token:
        "00629ee422fd0594cdba1998cebfdd8ed94IADKYbCs0ZL4yJnxqRh5g+q8NF1EKrAHazoVoCAyJBZhbQ5YzgsAAAAAEADn8NlK7u0tYQEAAQDx7S1h",
      uid: 0,
    };

    $(() => {
      getDevices(function (devices) {
        devices.audios.forEach(function (audio) {
          $("<option/>", {
            value: audio.value,
            text: audio.name,
          }).appendTo("#microphoneId");
        });
        devices.videos.forEach(function (video) {
          $("<option/>", {
            value: video.value,
            text: video.name,
          }).appendTo("#cameraId");
        });
        screenShareResolutions.forEach(function (resolution) {
          $("<option/>", {
            value: resolution.value,
            text: resolution.name,
          }).appendTo("#screenShareResolution");
        });
        M.AutoInit();

        // if (localStorage.getItem("screen_sharing") != "true") {
        //   M.Modal.init($("#warn")[0], {
        //     dismissible: false,
        //   }).open();
        // }
      });

      // if (isSafari()) {
      //   Toast.error('Safari not support screen sharing')
      //   $('#join').prop('disabled', true)
      // }

      const fields = ["appID", "channel"];

      let rtc = new RTCClient();

      $(".autoplay-fallback").on("click", function (e) {
        e.preventDefault();
        const id = e.target.getAttribute("id").split("video_autoplay_")[1];
        console.log("autoplay fallback");
        if (id === "local") {
          rtc._localStream
            .resume()
            .then(() => {
              Toast.notice("local resume");
              $(e.target).addClass("hide");
            })
            .catch((err) => {
              Toast.error(
                "resume failed, please open console see more details"
              );
              console.error(err);
            });
          return;
        }
        const remoteStream = rtc._remoteStreams.find(
          (item) => `${item.getId()}` == id
        );
        if (remoteStream) {
          remoteStream
            .resume()
            .then(() => {
              Toast.notice("remote resume");
              $(e.target).addClass("hide");
            })
            .catch((err) => {
              Toast.error(
                "resume failed, please open console see more details"
              );
              console.error(err);
            });
        }
      });

      const params = data;
      let temp = { ...params, screenAudio };
      if (validator(params, fields)) {
        // rtc.createScreenStream(temp)
        rtc.join(temp);
      }

      $("#show_profile").on("change", function (e) {
        e.preventDefault();
        rtc.setNetworkQualityAndStreamStats(true);
      });

      $("#enable_audio").on("change", function (e) {
        e.preventDefault();
        screenAudio = this.checked;
      });

      $("#leave").on("click", function (e) {
        e.preventDefault();
        console.log("leave");
        const params = serializeFormData();
        if (validator(params, fields)) {
          rtc.leave();
        }
      });
    });
  }
  render() {
    return (
      <>
        <div
          className="bg-dark"
          style={{
            width: "1094px",
            height: " 560px",
          }}
        >
          <div className="" id="video">
            <div className="video-view">
              <div id="local_stream" className="video-placeholder"></div>
              <div id="local_video_info" className="video-profile hide"></div>
              <div
                id="video_autoplay_local"
                className="autoplay-fallback hide"
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
