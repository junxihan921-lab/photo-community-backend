const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// 允许接收 JSON
app.use(express.json());

// 首页
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "摄影作品社区后端运行正常",
        version: "1.0.0"
    });
});

// 测试接口
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API 工作正常"
    });
});

// 启动服务器
app.listen(PORT, "0.0.0.0", () => {
    console.log("================================");
    console.log("摄影作品社区后端");
    console.log("服务器已启动");
    console.log("端口：" + PORT);
    console.log("================================");
});
