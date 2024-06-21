# 仅个人开发练习使用

GKD 订阅模板, 此仓库方便您直接构建自己订阅, 点击右上角 [Use this template](https://github.com/new?template_name=subscription-template&template_owner=gkd-kit) 即可使用

## 构建订阅

我们需要将 [./src](./src/) 分散的文件合并为一个 gkd.json5 的最终订阅文件并输出到 [./dist](./dist/) 目录下

推荐使用 github actions 进行构建, 在 [./.github/workflows](./.github/workflows) 下有 3 个工作流

我们使用其中的 `build_release.yml` 构建并发布

打开 <https://github.com/username/subscription/actions/workflows/build_release.yml>

然后点击右侧的 `Run workflow` 即可运行并发布

![image](https://github.com/gkd-kit/gkd/assets/38517192/bbaf5113-8ab3-4be0-9a79-ee7a7389a58c)

构建后订阅将输出到 dist 目录下, gkd.json 的文件订阅地址如下, 复制后到 GKD 添加即可

```txt
https://raw.githubusercontent.com/username/subscription/main/dist/gkd.json5
```

## 镜像加速

raw.githubusercontent.com 在大陆的访问常常无法访问

您可以换成 <https://fastly.jsdelivr.net/gh/username/subscription@main/dist/gkd.json5> 加速访问

如果无法访问 raw.githubusercontent.com 和 fastly.jsdelivr.net

您可以将本仓库发布到 npm 上, 然后通过 registry.npmmirror.com 加速访问

要发布到 npm 上, 必须先将 [./package.json](./package.json) 的 name 字段改成未使用的包名, 否则发布失败

您可以改成 `gkd-subscription-xxxx` 其中 `xxxx` 是订阅的 id 或者随机字母数字, 总之不冲突就行

或者改成 `@your_npm_name/subscription`, 这种类型是 scope 名称, 其中 `your_npm_name` 是你下面要注册的 npm 用户名

![image](https://github.com/gkd-kit/gkd/assets/38517192/79817967-6f97-4935-9bf3-179bbf50b3aa)

接下来获取 token, 你需要先注册 <https://www.npmjs.com>, 然后到 Access Tokens 界面点击 Generate New Token 选择 Classic Token 后随便输入 Name 选择 Publish 即可生成并复制

![image](https://github.com/gkd-kit/gkd/assets/38517192/ca5eaf26-3705-4dc7-9584-4a235bbefde2)

![image](https://github.com/gkd-kit/gkd/assets/38517192/6da188ab-e415-44de-b2f7-3f985ab4d401)

![image](https://github.com/gkd-kit/gkd/assets/38517192/55db57f6-1021-4d85-afd0-fe7df1f9bbcf)

复制后打开 <https://github.com/username/subscription/settings/secrets/actions/new>

在 Name 输入 `NPM_TOKEN`, 在 Secret 输入刚刚复制的 token, 点击 Add secret 即可添加成功

![image](https://github.com/gkd-kit/gkd/assets/38517192/72b062d8-4540-4602-82fe-416ea5348014)

然后只需要重复上面的 构建订阅 步骤即可发布, 发布后得到的镜像加速链接如下

```txt
https://registry.npmmirror.com/gkd-subscription-xxxx/latest/files/dist/gkd.json5
```

注: 将 gkd-subscription-xxxx 换成您的包名

如果你的包名是 `@your_npm_name/subscription` 这种类型, 加速链接是

```txt
https://registry.npmmirror.com/@your_npm_name/subscription/latest/files/dist/gkd.json5
```

由于 npmmirror 被恶意刷流量后已经改为白名单模式, 不在白名单内的包, 上面的链接无法正常加速访问

因此要使上面的链接被正常访问, 你需要向 <https://github.com/cnpm/unpkg-white-list> 提交 pr 将你的包添加到白名单

## 自定义配置文件

注意: **大多数情况下, 你不需要自定义, 使用默认配置时, 下面此节教程无需了解**

你可以在 [./package.json](./package.json) 下添加 gkd 属性配置自定义构建选项

```json
{
  "gkd": {
    "outDir": "dist",
    "file": "gkd.json5",
    "versionFile": "gkd.version.json5",
    "changelog": "CHANGELOG.md",
    "README.md": "README.md"
  }
}
```

这个 gkd 属性的类型如下

```ts
/**
 * @default package.json.gkd
 */
type GkdConfig = {
    /**
     * @default 'dist'
     */
    outDir?: string;
    /**
     * @default 'gkd.json5'
     */
    file?: string;
    /**
     * @default 'gkd.version.json5'
     */
    versionFile?: string;
    /**
     * @default 'CHANGELOG.md'
     */
    changelog?: string;
    /**
     * @default 'README.md'
     */
    readme?: string;
};
```

如果不想写配置文件, 也可以将这个参数直接传递给 `@gkd-kit/tools` 的 `updateDist` 函数

手动传递参数的时候, 你必须显式将路径(非文件名)参数传递给 [./.github/workflows/build_release.yml](./.github/workflows/build_release.yml) 下的 `updatePkgVersion` 和 `stdoutGkdVersion` 函数
