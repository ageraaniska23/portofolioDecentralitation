import { ethers } from "hardhat";


async function main() {
  const Web3Portofolio = await ethers.deployContract('Portfolio');
  await Web3Portofolio.waitForDeployment();
  const User =  await Web3Portofolio.getAddress();
  console.log('depploy succes!!!!')
  console.log("for verify : npx hardhat verify <address> --network bsctestnet")
  console.log(`Contract : ${User}`);

}

main().catch((error) =>{
  console.error(error);
  process.exitCode = 1;
});

// 