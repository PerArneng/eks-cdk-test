import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as eks from '@aws-cdk/aws-eks';
import * as iam from '@aws-cdk/aws-iam';
import * as ec2 from '@aws-cdk/aws-ec2';

export class EksCdkTestStack extends cdk.Stack {
  
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const clusterAdmin = new iam.Role(this, 'AdminRole', {
      assumedBy: new iam.AccountRootPrincipal()
    });

    const clusterProps:eks.ClusterProps = {
      version: eks.KubernetesVersion.V1_17,
      defaultCapacity: 1,
      mastersRole: clusterAdmin,
      clusterName: `TestEksCluster`,
      defaultCapacityInstance: new ec2.InstanceType("t3.nano")
    }

    const cluster = new eks.Cluster(this, 'eks-test-cluster', clusterProps);

  }

}
