document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    $('.sect-filters_and_sort #maledoc1:checkbox').change(function() {
        let urlParams = new URLSearchParams(window.location.search);
        if ($(this).is(':checked')) {
            if (urlParams.has('gender') && urlParams.get('gender') == 'female') {
                urlParams.set('gender', 'male_female');
            } else {
                urlParams.set('gender', 'male');
            }
        } else {
            if (urlParams.has('gender') && urlParams.get('gender') == 'male_female') {
                urlParams.set('gender', 'female');
            } else {
                urlParams.delete('gender');
            }
        }
        updateQueryParameters(urlParams);
    });
    $('.sect-filters_and_sort #femaledoc1:checkbox').change(function() {
        let urlParams = new URLSearchParams(window.location.search);
        if ($(this).is(':checked')) {
            if (urlParams.has('gender') && urlParams.get('gender') == 'male') {
                urlParams.set('gender', 'male_female');
            } else {
                urlParams.set('gender', 'female');
            }
        } else {
            if (urlParams.has('gender') && urlParams.get('gender') == 'male_female') {
                urlParams.set('gender', 'male');
            } else {
                urlParams.delete('gender');
            }
        }
        updateQueryParameters(urlParams);
    });
    $('.availability #nextthreedays1, #available_three_day').change(function() {
        let urlParams = new URLSearchParams(window.location.search);
        if ($(this).is(':checked')) {
            if (urlParams.has('availability') && urlParams.get('availability') == 'today') {
                urlParams.set('availability', 'next-three-day_today');
            } else {
                urlParams.set('availability', 'next-three-day');
            }
            $('#nextthreedays2').prop('checked', true);
        } else {
            $('#nextthreedays2').prop('checked', false);
            if (urlParams.has('availability') && urlParams.get('availability') == 'next-three-day_today') {
                urlParams.set('availability', 'today');
            } else {
                urlParams.delete('availability');
            }
        }
        updateQueryParameters(urlParams);
        filtersCount();
    });
    $('.availability #today1').change(function() {
        let urlParams = new URLSearchParams(window.location.search);
        if ($(this).is(':checked')) {
            if (urlParams.has('availability') && urlParams.get('availability') == 'next-three-day') {
                urlParams.set('availability', 'next-three-day_today');
            } else {
                urlParams.set('availability', 'today');
            }
        } else {
            if (urlParams.has('availability') && urlParams.get('availability') == 'next-three-day_today') {
                urlParams.set('availability', 'next-three-day');
            } else {
                urlParams.delete('availability');
            }
        }
        updateQueryParameters(urlParams);
    });
    $('.sect-filters_and_sort .sortby select').change(function() {
        let urlParams = new URLSearchParams(window.location.search);
        if ($(this).val().trim() == "") {
            urlParams.delete('sort_by');
        } else {
            urlParams.set('sort_by', $(this).val());
        }
        updateQueryParameters(urlParams);
    });

    function getQueryStringsLength() {
        return window.location.search.split('&').filter(String).length;
    }

    function getCurrentUrlWithPath() {
        let pageNumber = window.location.pathname.split('/').pop();
        let pathname = window.location.pathname;
        if ($.isNumeric(pageNumber)) {
            pathname = pathname.substring(0, pathname.length - pageNumber.length - 1);
        }
        return window.location.protocol + "//" + window.location.host + pathname;
    }

    function updateQueryParameters(urlParams) {
        let newurl = getCurrentUrlWithPath();
        if (urlParams.toString()) {
            newurl += "?" + urlParams.toString();
        }
        window.history.replaceState({
            path: newurl
        }, '', newurl);
        getSearchResults(newurl);
    }
    $('body').on('click', 'nav[aria-label="Card list pagination"] ul li a', function(e) {
        if (getQueryStringsLength() > 0) {
            let clickedPageNumber = $(this).data('ci-pagination-page');
            let clickedPageUrl = $(this).attr('href');
            if (clickedPageNumber == undefined) {
                return;
            }
            let finalUrl = clickedPageUrl;
            if (clickedPageUrl.includes('ci_csrf_token')) {
                let ciCsrfToken = clickedPageUrl.split('&').pop();
                finalUrl = clickedPageUrl.substring(0, clickedPageUrl.length - ciCsrfToken.length - 1);
            }
            window.history.replaceState({
                path: finalUrl
            }, '', finalUrl);
            getSearchResults(finalUrl);
            return false;
        }
    });

    function getSearchResults(url) {
        $.ajax({
            url: url,
            type: "POST",
            dataType: 'json',
            beforeSend: function(xhr) {
                $('.shiner_laoder').css('display', 'block');
                $('#filter_sort_loader').css('display', 'flex');
            }
        }).done(function(response) {
            if (response && response.search_results_string) {
                $('#showing_results_title').html("Showing " + response.search_results_string);
                $('nav[aria-label="Card list pagination"]').html(response.pagination);
                if (response.doctors.length == 0) {
                    $('#showing_results_title').html("");
                    $('#doctors-result').html('<div class="no-match-found text-center"><img src="https://s3-eu-west-1.amazonaws.com/mdpk/frontend/assets/images/sad.png" style="height:240px;width:150px;"><p class="my-4">No match found</p></div>');
                } else {
                    $('#doctors-result').html(response.doctors_string);
                }
            }
            $('.shiner_laoder').css('display', 'none');
            $('#filter_sort_loader').css('display', 'none');
        });
    }
    let objectState = {};
    $('#filters_sort_modal').on('show.bs.modal', function(e) {
        objectState = $('#sort-filter-form').serializeArray();
        if (e.relatedTarget.id == 'filters_sort_btn') {
            $('.filters-block').removeClass('d-none');
            $('.sort-by-block').addClass('d-none');
        } else {
            $('.sort-by-block').removeClass('d-none');
            $('.filters-block').addClass('d-none');
        }
    });
    $('#filters-reset').on('click', function(event) {
        event.preventDefault();
        $('#sort-filter-form input[type="checkbox"]').prop('checked', false);
        if (objectsAreSame(objectState, $('#sort-filter-form').serializeArray())) {
            $('#filters_sort_modal').modal('hide');
            return;
        }
        let searchParams = applyFilters();
        $('#filters_sort_modal').modal('hide');
        updateQueryParameters(searchParams);
        filtersCount();
    });

    function filtersCount() {
        let filtersCount = 0;
        let queryStrings = location.search;
        if (queryStrings.includes('availability')) {
            filtersCount += 1;
        }
        if (queryStrings.includes('gender')) {
            filtersCount += 1;
        }
        if (filtersCount) {
            $('#filters_count').html(`(${filtersCount})`);
        } else {
            $('#filters_count').html('');
        }
        return filtersCount;
    }
    $('#filters_sort_modal').on('hide.bs.modal', function(event) {
        const activeElement = $(document.activeElement);
        if (activeElement.is('[data-dismiss]') && event.type === 'hide') {
            setTimeout(function() {
                let searchParams = new URLSearchParams(window.location.search);
                $('#sort-filter-form input[type="checkbox"]').prop('checked', false);
                let gender = searchParams.get('gender');
                if (gender == "male") {
                    $('#sort-filter-form input[name="male"]').prop('checked', true);
                } else if (gender == "female") {
                    $('#sort-filter-form input[name="female"]').prop('checked', true);
                } else if (gender == "male_female") {
                    $('#sort-filter-form input[name="male"]').prop('checked', true);
                    $('#sort-filter-form input[name="female"]').prop('checked', true);
                }
                let availability = searchParams.get('availability');
                if (availability == "today") {
                    $('#sort-filter-form input[name="today"]').prop('checked', true);
                } else if (availability == "next-three-day") {
                    $('#sort-filter-form input[name="three_day"]').prop('checked', true);
                } else if (availability == "next-three-day_today") {
                    $('#sort-filter-form input[name="today"]').prop('checked', true);
                    $('#sort-filter-form input[name="three_day"]').prop('checked', true);
                }
            }, 100);
        }
    });

    function objectsAreSame(x, y) {
        var objectsAreSame = true;
        for (var propertyName in x) {
            if (x[propertyName]['name'] !== y[propertyName]['name']) {
                objectsAreSame = false;
                break;
            }
        }
        return objectsAreSame;
    }

    function applyFilters() {
        let searchParams = new URLSearchParams(window.location.search);
        let newParams = $('#sort-filter-form').serializeArray();
        let male = newParams.find(x => x.name === 'male');
        let female = newParams.find(x => x.name === 'female');
        if (male && female) {
            searchParams.set('gender', 'male_female');
        } else if (male) {
            searchParams.set('gender', 'male');
        } else if (female) {
            searchParams.set('gender', 'female');
        } else {
            if (searchParams.has('gender')) {
                searchParams.delete('gender');
            }
        }
        let today = newParams.find(x => x.name === 'today');
        let threeDay = newParams.find(x => x.name === 'three_day');
        if (today && threeDay) {
            searchParams.set('availability', 'next-three-day_today');
            $('#available_three_day').prop('checked', true);
        } else if (today) {
            searchParams.set('availability', 'today');
            $('#available_three_day').prop('checked', false);
        } else if (threeDay) {
            searchParams.set('availability', 'next-three-day');
            $('#available_three_day').prop('checked', true);
        } else {
            $('#available_three_day').prop('checked', false);
            if (searchParams.has('availability')) {
                searchParams.delete('availability');
            }
        }
        let sortBy = $('#filter_sort_title').text() == "Sort" ? newParams.find(x => x.name === 'sortby_radio') : newParams.find(x => x.name === 'sortby_radio1');
        if (sortBy && sortBy.value) {
            searchParams.set('sort_by', sortBy.value);
        } else {
            if (searchParams.has('sort_by')) {
                searchParams.delete('sort_by');
            }
        }
        return searchParams;
    }
    $('#filter-apply-btn').on('click', function(e) {
        e.preventDefault();
        if ($('.non-intrusive-card').length > 0) {
            $('.non-intrusive-card').hide();
        }
        if (objectsAreSame(objectState, $('#sort-filter-form').serializeArray())) {
            $('#filters_sort_modal').modal('hide');
            return;
        }
        let searchParams = applyFilters();
        $('#filters_sort_modal').modal('hide');
        updateQueryParameters(searchParams);
        filtersCount();
    });
});
window.addEventListener('load', function() {
    $('select[name="city"]').on('change', function() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: base_url + 'get_localities',
            data: {
                'city': $(this).val()
            },
            success: function(r) {
                var str = '<option value="" selected>Any locality</option>';
                for (var i = 0; i < r.data.length; i++) {
                    str += '<option value="' + r.data[i]['locality_slug'] + '">' + r.data[i]['locality'] + '</option>';
                }
                $('select[name="locality"]').html(str);
            },
        });
    });
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed-header");
    } else {
        $("body").removeClass("fixed-header");
    }
});