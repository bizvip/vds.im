import express from 'express';
import {createRequestHandler} from '@remix-run/express';
import {broadcastDevReady} from '@remix-run/node';
import path from 'path';

const app = express();
const BUILD_DIR = path.join(process.cwd(), "build");

// 处理静态文件
app.use(express.static('public'));

// 创建异步构建加载器
const getBuild = async () => {
    const build = await import(BUILD_DIR);
    return build;
};

// Remix 请求处理
app.all(
    "*",
    createRequestHandler({
        build: getBuild,
        mode: process.env.NODE_ENV,
    })
);

const start = async () => {
    const port = process.env.PORT || 3000;

    app.listen(port, async () => {
        console.log(`Express server listening on port ${port}`);

        if (process.env.NODE_ENV === "development") {
            const build = await getBuild();
            await broadcastDevReady(build);
        }
    });
};

start().catch(console.error);