import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";

export class AwsChromeLambdaLayerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new LayerVersion(this, "aws-chrome-lambda-layer", {
      layerVersionName: "AwsChromeLambdaLayer",
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset("./dist/layer"),
    });
  }
}
