"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = void 0;
const chrome_aws_lambda_1 = __importDefault(require("@sparticuz/chrome-aws-lambda"));
async function getPage(url) {
    let browser;
    let page;
    try {
        browser = await chrome_aws_lambda_1.default.puppeteer.launch({
            args: chrome_aws_lambda_1.default.args,
            defaultViewport: chrome_aws_lambda_1.default.defaultViewport,
            executablePath: await chrome_aws_lambda_1.default.executablePath,
            headless: chrome_aws_lambda_1.default.headless,
            ignoreHTTPSErrors: true,
        });
        let page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle0" });
        return page;
    }
    catch (error) {
        console.log("Warning:" + error);
        console.log("Resetting browser context");
        try {
            page.browser().close();
        }
        catch { }
    }
    finally {
        browser = null;
        return;
    }
}
exports.getPage = getPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUZBQW9EO0FBRTdDLEtBQUssVUFBVSxPQUFPLENBQUMsR0FBVztJQUN2QyxJQUFJLE9BRUksQ0FBQztJQUNULElBQUksSUFJSCxDQUFDO0lBRUYsSUFBSTtRQUNGLE9BQU8sR0FBRyxNQUFNLDJCQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLEVBQUUsMkJBQVEsQ0FBQyxJQUFJO1lBQ25CLGVBQWUsRUFBRSwyQkFBUSxDQUFDLGVBQWU7WUFDekMsY0FBYyxFQUFFLE1BQU0sMkJBQVEsQ0FBQyxjQUFjO1lBQzdDLFFBQVEsRUFBRSwyQkFBUSxDQUFDLFFBQVE7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUk7WUFDRixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7UUFBQyxNQUFNLEdBQUU7S0FDWDtZQUFTO1FBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLE9BQU87S0FDUjtBQUNILENBQUM7QUFoQ0QsMEJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNocm9taXVtIGZyb20gXCJAc3BhcnRpY3V6L2Nocm9tZS1hd3MtbGFtYmRhXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKHVybDogc3RyaW5nKSB7XG4gIGxldCBicm93c2VyOiBBd2FpdGVkPFxuICAgIFJldHVyblR5cGU8KHR5cGVvZiBjaHJvbWl1bSlbXCJwdXBwZXRlZXJcIl1bXCJsYXVuY2hcIl0+XG4gID4gfCBudWxsO1xuICBsZXQgcGFnZTogQXdhaXRlZDxcbiAgICBSZXR1cm5UeXBlPFxuICAgICAgQXdhaXRlZDxSZXR1cm5UeXBlPCh0eXBlb2YgY2hyb21pdW0pW1wicHVwcGV0ZWVyXCJdW1wibGF1bmNoXCJdPj5bXCJuZXdQYWdlXCJdXG4gICAgPlxuICA+O1xuXG4gIHRyeSB7XG4gICAgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xuICAgICAgYXJnczogY2hyb21pdW0uYXJncyxcbiAgICAgIGRlZmF1bHRWaWV3cG9ydDogY2hyb21pdW0uZGVmYXVsdFZpZXdwb3J0LFxuICAgICAgZXhlY3V0YWJsZVBhdGg6IGF3YWl0IGNocm9taXVtLmV4ZWN1dGFibGVQYXRoLFxuICAgICAgaGVhZGxlc3M6IGNocm9taXVtLmhlYWRsZXNzLFxuICAgICAgaWdub3JlSFRUUFNFcnJvcnM6IHRydWUsXG4gICAgfSk7XG4gICAgbGV0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTtcbiAgICBhd2FpdCBwYWdlLmdvdG8odXJsLCB7IHdhaXRVbnRpbDogXCJuZXR3b3JraWRsZTBcIiB9KTtcblxuICAgIHJldHVybiBwYWdlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiV2FybmluZzpcIiArIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBicm93c2VyIGNvbnRleHRcIik7XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2UhLmJyb3dzZXIoKS5jbG9zZSgpO1xuICAgIH0gY2F0Y2gge31cbiAgfSBmaW5hbGx5IHtcbiAgICBicm93c2VyID0gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==