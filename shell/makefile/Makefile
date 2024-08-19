x.txt: resource/c.txt m.txt
	cat $^ > $@

m.txt: resource/a.txt resource/b.txt
	cat $^ > $@

.PHONY: clean
clean: 
	rm -f x.txt m.txt

cd:
	pwd
	cd ..
	pwd

cd_ok:
	# pwd; cd ..; pwd
	pwd; \
	cd ..; \
	pwd

no_output:
	@echo 'not display'
	echo 'will display'	


has_error:
	rm zzz.txt
	@echo 'ok'

ignore_error:
	-rm zzz.txt
	@echo 'ok'

ls:
	@echo ls -l