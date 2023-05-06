"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = void 0;
const chrome_aws_lambda_1 = __importDefault(require("chrome-aws-lambda"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMEVBQXlDO0FBRWxDLEtBQUssVUFBVSxPQUFPLENBQUMsR0FBVztJQUN2QyxJQUFJLE9BRUksQ0FBQztJQUNULElBQUksSUFJSCxDQUFDO0lBRUYsSUFBSTtRQUNGLE9BQU8sR0FBRyxNQUFNLDJCQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLEVBQUUsMkJBQVEsQ0FBQyxJQUFJO1lBQ25CLGVBQWUsRUFBRSwyQkFBUSxDQUFDLGVBQWU7WUFDekMsY0FBYyxFQUFFLE1BQU0sMkJBQVEsQ0FBQyxjQUFjO1lBQzdDLFFBQVEsRUFBRSwyQkFBUSxDQUFDLFFBQVE7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUk7WUFDRixJQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7UUFBQyxNQUFNLEdBQUU7S0FDWDtZQUFTO1FBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLE9BQU87S0FDUjtBQUNILENBQUM7QUFoQ0QsMEJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNocm9taXVtIGZyb20gXCJjaHJvbWUtYXdzLWxhbWJkYVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZSh1cmw6IHN0cmluZykge1xuICBsZXQgYnJvd3NlcjogQXdhaXRlZDxcbiAgICBSZXR1cm5UeXBlPCh0eXBlb2YgY2hyb21pdW0pW1wicHVwcGV0ZWVyXCJdW1wibGF1bmNoXCJdPlxuICA+IHwgbnVsbDtcbiAgbGV0IHBhZ2U6IEF3YWl0ZWQ8XG4gICAgUmV0dXJuVHlwZTxcbiAgICAgIEF3YWl0ZWQ8UmV0dXJuVHlwZTwodHlwZW9mIGNocm9taXVtKVtcInB1cHBldGVlclwiXVtcImxhdW5jaFwiXT4+W1wibmV3UGFnZVwiXVxuICAgID5cbiAgPjtcblxuICB0cnkge1xuICAgIGJyb3dzZXIgPSBhd2FpdCBjaHJvbWl1bS5wdXBwZXRlZXIubGF1bmNoKHtcbiAgICAgIGFyZ3M6IGNocm9taXVtLmFyZ3MsXG4gICAgICBkZWZhdWx0Vmlld3BvcnQ6IGNocm9taXVtLmRlZmF1bHRWaWV3cG9ydCxcbiAgICAgIGV4ZWN1dGFibGVQYXRoOiBhd2FpdCBjaHJvbWl1bS5leGVjdXRhYmxlUGF0aCxcbiAgICAgIGhlYWRsZXNzOiBjaHJvbWl1bS5oZWFkbGVzcyxcbiAgICAgIGlnbm9yZUhUVFBTRXJyb3JzOiB0cnVlLFxuICAgIH0pO1xuICAgIGxldCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG4gICAgYXdhaXQgcGFnZS5nb3RvKHVybCwgeyB3YWl0VW50aWw6IFwibmV0d29ya2lkbGUwXCIgfSk7XG5cbiAgICByZXR1cm4gcGFnZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIldhcm5pbmc6XCIgKyBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgYnJvd3NlciBjb250ZXh0XCIpO1xuICAgIHRyeSB7XG4gICAgICBwYWdlIS5icm93c2VyKCkuY2xvc2UoKTtcbiAgICB9IGNhdGNoIHt9XG4gIH0gZmluYWxseSB7XG4gICAgYnJvd3NlciA9IG51bGw7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=