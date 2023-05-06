"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsChromeLambdaLayerStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
class AwsChromeLambdaLayerStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new aws_lambda_1.LayerVersion(this, "aws-chrome-lambda-layer", {
            layerVersionName: "AwsChromeLambdaLayer",
            compatibleRuntimes: [aws_lambda_1.Runtime.NODEJS_18_X],
            code: aws_lambda_1.Code.fromAsset("./dist/layer"),
        });
    }
}
exports.AwsChromeLambdaLayerStack = AwsChromeLambdaLayerStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXItc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXItc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsdURBQXFFO0FBRXJFLE1BQWEseUJBQTBCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDdEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLHlCQUFZLENBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQ2hELGdCQUFnQixFQUFFLHNCQUFzQjtZQUN4QyxrQkFBa0IsRUFBRSxDQUFDLG9CQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3pDLElBQUksRUFBRSxpQkFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBVkQsOERBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgQ29kZSwgTGF5ZXJWZXJzaW9uLCBSdW50aW1lIH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1sYW1iZGFcIjtcblxuZXhwb3J0IGNsYXNzIEF3c0Nocm9tZUxhbWJkYUxheWVyU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBuZXcgTGF5ZXJWZXJzaW9uKHRoaXMsIFwiYXdzLWNocm9tZS1sYW1iZGEtbGF5ZXJcIiwge1xuICAgICAgbGF5ZXJWZXJzaW9uTmFtZTogXCJBd3NDaHJvbWVMYW1iZGFMYXllclwiLFxuICAgICAgY29tcGF0aWJsZVJ1bnRpbWVzOiBbUnVudGltZS5OT0RFSlNfMThfWF0sXG4gICAgICBjb2RlOiBDb2RlLmZyb21Bc3NldChcIi4vZGlzdC9sYXllclwiKSxcbiAgICB9KTtcbiAgfVxufVxuIl19