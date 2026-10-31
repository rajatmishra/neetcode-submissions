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
     * @return {void}
     */
    reorderList(head) {
        let slowPointer = head;
        let fastPointer = head;
        while (fastPointer != null && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        let secondHalf = slowPointer.next;
        slowPointer.next = null;
        let prevNode = null;
        while (secondHalf != null) {
            let nextNode = secondHalf.next;
            secondHalf.next = prevNode;
            prevNode = secondHalf;
            secondHalf = nextNode;
        }
        
        let firstHalf= head;
        let reversedSecondHalf = prevNode;
        while(reversedSecondHalf != null)
        {
            let first = firstHalf.next;
            let second = reversedSecondHalf.next;
            firstHalf.next = reversedSecondHalf;
            reversedSecondHalf.next = first;
            firstHalf = first;
            reversedSecondHalf = second;
        }


    }
}
