---
id: S3D.session
title: S3D.session 
sidebar_label: S3D.session
---

--- 

The `S3D.session` namespace provides functions to manage a session with the API.

---

## `S3D.session.start`

At the beginning of every API session, the `S3D.session.start` function must be the first function in the array. This initiates a session and will return a [`session_id`](getting-started-the-request-object.md#session_id-optional) which can be used in subsequent calls made in the following 30 minutes to skip the verification process, thereby dramatically reducing the time to response.

:::important
`S3D.session.start` must always be the first function even if [`session_id`](getting-started-the-request-object.md#session_id-optional) is provided.
:::

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `keep_open` | `boolean` | `true`, `false` | If the session should be kept on standby. If `true`, subsequent calls to the API using the [`session_id`](getting-started-the-request-object.md#session_id-optional) provided from the first call in lieu of [`key`](getting-started-the-request-object.md#key-optional), will be 4-8x faster. | `false` |

```json title="Sample input for S3D.session.start"
{
	"function": "S3D.session.start",
    "arguments" : {
        "keep_open": true
    }
}
```

After authenticating using the API [`key`](getting-started-the-request-object.md#key-optional), the `response` object will contain some useful information. The `session_id` key can be used to make further calls to the same session, skipping authentication. The `session_expiry_time` provides an approximate Unix time until the session expires. After this, the user must re-authenticate using their API [`key`](getting-started-the-request-object.md#key-optional).

```json title="Sample response for S3D.session.start"
{
    "response": {
        "session_id": "Ofd4WYHtkTjY9N2Ke3hKgTUc4r3GKtwIdy5SNswqRX6o01I46xBXt5d8KRP3JDHI_1",
        "msg": "S3D session successfully started.",
        "status": 0,
        "function": "S3D.session.start",
        "data": "",
        "last_session_id": "Ofd4WYHtkTjY9N2Ke3hKgTUc4r3GKtwIdy5SNswqRX6o01I46xBXt5d8KRP3JDHI_1",
        "session_expiry_time": 1605153571
    },
    "functions": ["..."]
}
```

:::tip
The returned [session_id](getting-started-the-request-object.md#session_id-optional) can be provided in the [auth](getting-started-the-request-object.md#auth) object of subsequent calls to make the request faster.
:::