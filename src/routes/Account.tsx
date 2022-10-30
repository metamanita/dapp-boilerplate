import { Box, Text } from "@chakra-ui/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export default function Account(Props: any) {
    const { account } = useEthers()
    const etherBalance = useEtherBalance(account)

    return (
        <Box px="3">
        <h1>Account</h1>
        
        <Text color="white" fontSize="sm">
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
    </Box>
    )
}