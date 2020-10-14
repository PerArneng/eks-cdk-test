#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EksCdkTestStack } from '../lib/eks-cdk-test-stack';

const app = new cdk.App();

var props = {
    env: {
        region: "eu-north-1", 
        account: "891000135680" 
    }
}

new EksCdkTestStack(app, 'EksCdkTestStack', props);
