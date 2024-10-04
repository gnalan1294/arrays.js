            let n=prompt("Enter n");
            let arr=[];
            let nz=[];
            let c=0;
            let j=0;
            for(i=0;i<n;i++)
            {
            arr[i]=prompt("enter element")
            if(arr[i]==0)
            {
                c++;
            }
            else{
                nz[j]=arr[i];
                j++;
            }
            }
            for(i=0;i<c;i++){
                nz[j+i]=0;
            }
            document.write(nz);