import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRsw from 'vite-plugin-rsw'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 查看更多：https://github.com/lencx/vite-plugin-rsw
    // ViteRsw({
    //   // 如果包在`unLinks`和`crates`都配置过
    //   // 会执行，先卸载(npm unlink)，再安装(npm link)
    //   // 例如下面会执行
    //   // `npm unlink picture-wasm`
    //   unLinks: ['picture-wasm'],
    //   // 项目根路径下的rust项目
    //   // `@`开头的为npm组织
    //   // 例如下面会执行:
    //   // `npm link picture-wasm`
    //   // 因为执行顺序原因，虽然上面的unLinks会把`picture-wasm`卸载
    //   // 但是这里会重新进行安装
    //   crates: ['picture-wasm'],
    // }),
    // ViteRsw()
  ],
})
