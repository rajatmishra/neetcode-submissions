/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */

    
    removeNthFromEnd(head, n) {
        function reverseLL(head)
    {
        let prev = null;
        let curr = head;
        while(curr!=null)
        {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
         let reversed = reverseLL(head);

        // Step 2: Create dummy node
        let dummy = new ListNode(0, reversed);
        let prev = dummy;

        // Step 3: Move to the node just before the one to remove
        for (let i = 1; i < n; i++) {
            prev = prev.next;
        }

        // Step 4: Remove the node
        prev.next = prev.next.next;

        // Step 5: Reverse again
        return reverseLL(dummy.next);


    }
}
