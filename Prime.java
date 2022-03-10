package hello;
import java.util.*;
public class Prime {
          public void prime(int no) {
	    	for (int num =2;num <=no;num++) {
		  boolean isprime =true;
		    for(int i=2;i<=num/2;i++) {
			if(num%i==0) {
		         isprime =false;
			 break;
     }
}
			if(isprime==true) {
					System.out.println(num);
				}
				
			}
	    }
	public static void main(String args[]) {
           
			Scanner scan = new Scanner(System.in);
			System.out.println("enter a num");
			int maxnum = scan.nextInt();
			System.out.println("list of prime no. are:");
			primeno p=new primeno();
			p.prime(maxnum);
	}
}
