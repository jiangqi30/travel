const mockIndexData = require("./mock/index.json");
const mockCityData = require("./mock/city.json");

module.exports = {
    //mock数据
    devServer: {
        port: 8080,
        before(app) {
            app.get("/api/index", (req, res) => {
                res.json(mockIndexData);
            }),
            app.get("/api/city", (req, res) => {
                res.json(mockCityData);
            })
        }
    },
    //配置自定义路径
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'styles': '@/assets/styles',
                'common': '@/common',
            }
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
}