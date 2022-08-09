import React from "react";
import AgoraRTC from "agora-rtc-sdk";
import { connect } from "react-redux";

import { createSteamToken } from "../redux/actions/action";

function Agora(props) {
  const rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };

  // Options for joining a channel
  const option = {
    appID: "29ee422fd0594cdba1998cebfdd8ed94",
    channel: "ch_name_token",
    codec: "h264",
    mode: "live",
    screenAudio: "off",
    screenShareResolution: "default",
    token:
      "00629ee422fd0594cdba1998cebfdd8ed94IADKYbCs0ZL4yJnxqRh5g+q8NF1EKrAHazoVoCAyJBZhbQ5YzgsAAAAAEADn8NlK7u0tYQEAAQDx7S1h",
    uid: null,
  };

  console.log(option);

  async function joinChannel(role) {
    // Create a client
    rtc.client = await AgoraRTC.createClient({ mode: "live", codec: "h264" });

    // Initialize the client
    await rtc.client.init(
      option.appID,
      async function () {
        console.log("init success");

        // Join a channel
        await rtc.client.join(
          option.token ? option.token : null,
          option.channel,
          option.uid ? +option.uid : null,
          async function (uid) {
            console.log(
              "join channel: " + option.channel + " success, uid: " + uid
            );
            rtc.params.uid = uid;
            if (role === "host") {
              rtc.client.setClientRole("host");
              // Create a local stream
              rtc.localStream = await AgoraRTC.createStream({
                streamID: rtc.params.uid,
                audio: false,
                video: true,
                screen: true,
              });

              // Initialize the local stream
              rtc.localStream.init(
                async function () {
                  console.log("init local stream success");
                  // rtc.localStream.play("local_stream", { fit: "cover" });
                  rtc.client.publish(rtc.localStream, function (err) {
                    console.log("publish failed");
                    console.error(err);
                  });
                },
                function (err) {
                  console.error("init local stream failed ", err);
                }
              );

              rtc.client.on("connection-state-change", function (evt) {
                console.log("audience", evt);
              });
            }
            if (role === "audience") {
              rtc.client.on("connection-state-change", function (evt) {
                console.log("audience", evt);
              });

              rtc.client.on("stream-added", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                if (id !== rtc.params.uid) {
                  rtc.client.subscribe(remoteStream, function (err) {
                    console.log("stream subscribe failed", err);
                  });
                }
                console.log("stream-added remote-uid: ", id);
              });

              rtc.client.on("stream-removed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                console.log("stream-removed remote-uid: ", id);
              });

              rtc.client.on("stream-subscribed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                remoteStream.play("remote_video_" + id);
                console.log("stream-subscribed remote-uid: ", id);
              });

              rtc.client.on("stream-unsubscribed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                remoteStream.pause("remote_video_");
                console.log("stream-unsubscribed remote-uid: ", id);
              });
            }
          },
          function (err) {
            console.error("client join failed", err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function leaveEventHost(params) {
    try {
      rtc.client.unpublish(rtc.localStream, function (err) {
        console.log("publish failed");
        console.error(err);
      });
      rtc.client.leave(function (ev) {
        console.log(ev);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function leaveEventAudience(params) {
    try {
      rtc.client.leave(
        function () {
          console.log("client leaves channel");
          //....
        },
        function (err) {
          console.log("client leave failed ", err);
          //error handling
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="col-md pt-3 text-center">
        <button
          className="btn btn-dark text-white fw-bold"
          onClick={() => {
            joinChannel("host");
          }}
        >
          <i className="fa fa-share-square-o"></i>
          مشاركة الشاشة
        </button>
        <button
          className="btn btn-secondary text-white fw-bold"
          onClick={() => leaveEventHost("host")}
        >
          انهاء الجلسة
        </button>
      </div>
      {/* <div id="local_stream" style={{ width: "400px", height: "400px" }}></div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.streamToken.token,
    ch_name: state.streamToken.channel,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    genereateToken: () => dispatch(createSteamToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agora);
